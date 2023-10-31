import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updatePatient } from '../../Reducers/patientSlice';
import { BiEdit } from 'react-icons/bi';
import { PatientModel } from './PatientModel';

export const EditPatient = ({ objectToShow }) => {
  const dispatch = useDispatch();

  const [editModal, setEditModal] = React.useState(false);

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  const editDetails = (updateData) => {
    dispatch(updatePatient({ id: updateData._id, updateData }));
  };

  return (
    <div>
      <button onClick={openEditModal}>
        <BiEdit />
      </button>
      <PatientModel
        modalIsOpen={editModal}
        closeModal={closeEditModal}
        handleSubmit={editDetails}
        initialState={objectToShow}
      />
    </div>
  );
};
