import styled from '@emotion/styled';
import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router';
import { KeyValuePair } from '../../Components/KeyValuePair';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
  display: flex;
  padding: 36px 0;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  padding: 29px 55px;
  font-style: normal;
  font-weight: 600;
  align-self: center;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding: 29px 66px;
`;

export const SinglePatient = () => {
  const { id } = useParams();
  const [singlePatient, setSinglePatient] = React.useState(null);
  const { wards } = useSelector((state) => state.wards);

  const fetchAPatient = async (patientId) => {
    console.log(patientId);
    const response = await axios.get(`/api/patients/${patientId}`);
    setSinglePatient(response.data?.patient);
  };

  React.useEffect(() => {
    fetchAPatient(id);
  }, []);

  console.log('Patient to see', singlePatient);

  const wardToDisplay = wards?.find((ward) => ward._id === singlePatient?.assignedWard);

  console.log('ward to display', wardToDisplay);

  return (
    <MainContainer>
      <Title>
        <h2>{singlePatient?.name}</h2>
      </Title>
      <DataContainer>
        <KeyValuePair keyText={'Age'} valueText={singlePatient?.age} />
        <KeyValuePair keyText={'Gender'} valueText={singlePatient?.gender} />
        <KeyValuePair keyText={'Medical History'} valueText={singlePatient?.medicalHistory} />
        <KeyValuePair keyText={'Contact'} valueText={singlePatient?.contact} />
        <KeyValuePair keyText={'Skills'} valueText={singlePatient?.currentMedicalCondition} />
        <KeyValuePair keyText={'Length of Stay'} valueText={singlePatient?.lengthOfStay} />
        <KeyValuePair
          keyText={'Assigned Ward'}
          valueText={singlePatient?.assignedWard?.specializations ?? '--'}
        />
      </DataContainer>
    </MainContainer>
  );
};
