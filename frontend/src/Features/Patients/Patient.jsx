import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../../Reducers/patientSlice';
// import { StudentModal } from './StudentModal';
// import { addStudent } from '../../Reducer/studentSlice';
// import { StudentRow } from './StudentRow';

export const Patient = () => {
  const { status, error, patients } = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients());
    }
  }, [status, dispatch]);

  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const addNewStudent = (studentData) => {
  //   dispatch(addStudent(studentData));
  // };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {/* <StudentModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={addNewStudent}
      /> */}
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}
      <div>
        {patients &&
          patients.map((patient) => (
            <>
              <p>{patient.name}</p>
            </>
          ))}
      </div>
    </div>
  );
};
