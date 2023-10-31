import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../../Reducers/patientSlice';
import { ListPage } from '../../Components/ListPage';
import { deletePatient, createPatient } from '../../Reducers/patientSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { PatientModel } from './PatientModel';
import { EditPatient } from './EditPatient';

export const Patient = () => {
  const { status, error, patients } = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients());
    }
  }, [status, dispatch]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addPatient = (patientData) => {
    dispatch(createPatient(patientData));
  };

  const deleteTeacherById = (id) => {
    dispatch(deletePatient(id));
  };

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}

      <div>
        <ListPage
          column={['Name', 'Age', 'Gender', 'Medical-Issue']}
          data={patients.map((patient) => [
            patient.name,
            patient.age,
            patient.gender,
            patient.currentMedicalCondition,
            <EditPatient key={patient._id} objectToShow={patient} />,
            <button key={patient._id} onClick={() => deleteTeacherById(patient._id)}>
              <AiOutlineDelete />
            </button>
          ])}
          title="Patients"
          description="We believe in practicing medicine with integrity and honesty. We are  always put our patient interest first"
          image=""
          openForm={openModal}
        />
        <PatientModel
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={addPatient}
          initialState={{}}
        />
      </div>
    </div>
  );
};
