import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWards, createWard, deleteWard } from '../../Reducers/wardSlice';
import { ListPage } from '../../Components/ListPage';
import { WardModel } from './WardModel';
import { EditWard } from './EditWard';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export const Ward = () => {
  const { status, error, wards } = useSelector((state) => state.wards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWards());
    }
  }, [status, dispatch]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addWard = (patientData) => {
    dispatch(createWard(patientData));
  };

  const deleteWardById = (id) => {
    dispatch(deleteWard(id));
  };

  console.log('Wards -', wards);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}

      <div>
        <ListPage
          column={[
            'Ward Number',
            'Specializations',
            'Capacity(beds)',
            'Current Occupancy(patients)'
          ]}
          data={wards.map((ward) => [
            <Link to={ward._id} key={ward._id}>
              {ward.wardNumber}
            </Link>,
            ward.specializations,
            ward.capacity,
            ward.currentOccupancy,
            <EditWard key={ward._id} objectToShow={ward} />,
            <button key={ward._id} onClick={() => deleteWardById(ward._id)}>
              <AiOutlineDelete />
            </button>
          ])}
          title="Wards"
          description="We are committed to providing excellent care and services to our patients"
          image=""
          openForm={openModal}
        />
        <WardModel
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={addWard}
          initialState={{}}
        />
      </div>
    </div>
  );
};
