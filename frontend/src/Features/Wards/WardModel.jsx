import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import { ButtonContainer, FormContainer, Input, Title } from '../../Components/Model.styles';

export const WardModel = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : { gender: 'Male' });
  const { wizardStatus } = useSelector((state) => state.wards);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

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
          Specialization:
          <Input
            type="text"
            name="specializations"
            value={formInput.specializations}
            onChange={(event) => saveFormDetails(event)}
          />
          Ward Number:
          <Input
            type="number"
            name="wardNumber"
            value={formInput.wardNumber}
            onChange={(event) => saveFormDetails(event)}
          />
          Capacity:
          <Input
            type="text"
            name="capacity"
            value={formInput.capacity}
            onChange={(event) => saveFormDetails(event)}
          />
          Current Occupancy:
          <Input
            type="text"
            name="currentOccupancy"
            value={formInput.currentOccupancy}
            onChange={(event) => saveFormDetails(event)}
          />
          Doctors:
          <Input
            type="number"
            name="doctors"
            value={formInput.doctors}
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
