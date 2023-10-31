import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import {
  ButtonContainer,
  FormContainer,
  Input,
  Select,
  Title
} from '../../Components/Model.styles';
import { fetchWards } from '../../Reducers/wardSlice';

export const PatientModel = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : { gender: 'Male' });
  const { wizardStatus } = useSelector((state) => state.patients);
  const { wards, status } = useSelector((state) => state.wards);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWards());
    }
  }, [status, dispatch]);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  console.log(wards);

  useEffect(() => {
    if (wizardStatus === 'success') {
      closeModal();
    }
  }, [wizardStatus]);

  console.log(formInput);

  return (
    <div>
      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Food</Title>
          Name:
          <Input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Age:
          <Input
            type="number"
            name="age"
            value={formInput.age}
            onChange={(event) => saveFormDetails(event)}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Input
              type="radio"
              name="gender"
              value="Male"
              checked={formInput.gender === 'Male'}
              onClick={(event) => saveFormDetails(event)}
            />
            Male
            <Input
              type="radio"
              name="gender"
              value="Female"
              checked={formInput.gender === 'Female'}
              onClick={(event) => saveFormDetails(event)}
            />
            Female
          </div>
          Medical History:
          <Input
            type="text"
            name="medicalHistory"
            value={formInput.medicalHistory}
            onChange={(event) => saveFormDetails(event)}
          />
          Contact:
          <Input
            type="text"
            name="contact"
            value={formInput.contact}
            onChange={(event) => saveFormDetails(event)}
          />
          Current Medical Issue:
          <Input
            type="text"
            name="currentMedicalCondition"
            value={formInput.currentMedicalCondition}
            onChange={(event) => saveFormDetails(event)}
          />
          Ward:
          {status === 'loading' ? (
            'loading...'
          ) : (
            <Select name="ward" value={formInput.ward} onChange={(event) => saveFormDetails(event)}>
              {wards.map((ward) => (
                <option key={ward._id} value={ward._id}>
                  {ward.wardNumber}-{ward.specializations}
                </option>
              ))}
            </Select>
          )}
          Length of Stay(in days):
          <Input
            type="number"
            name="lengthOfStay"
            value={formInput.lengthOfStay}
            onChange={(event) => saveFormDetails(event)}
          />
          <ButtonContainer>
            <button
              disabled={wizardStatus === 'loading'}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formInput);
                closeModal();
                setFormInput({});
              }}>
              {wizardStatus === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
            <button onClick={closeModal}>close</button>
          </ButtonContainer>
        </FormContainer>
      </Model>
    </div>
  );
};
