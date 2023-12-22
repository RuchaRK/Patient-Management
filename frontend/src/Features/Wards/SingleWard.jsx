import styled from '@emotion/styled';
import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router';
import { KeyValuePair } from '../../Components/KeyValuePair';

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

export const SingleWard = () => {
  const { id } = useParams();
  const [singleWard, setSingleWard] = React.useState(null);

  const fetchAWard = async (wardId) => {
    const response = await axios.get(`/api/wards/${wardId}`);
    setSingleWard(response.data?.ward);
  };

  React.useEffect(() => {
    fetchAWard(id);
  }, []);

  console.log('Ward to see', singleWard);

  return (
    <MainContainer>
      <Title>
        <h2>{singleWard?.specializations}</h2>
      </Title>
      <DataContainer>
        <KeyValuePair keyText={'Ward Number'} valueText={singleWard?.wardNumber} />
        <KeyValuePair keyText={'Capacity'} valueText={singleWard?.capacity} />
        <KeyValuePair keyText={'Current Occupancy'} valueText={singleWard?.currentOccupancy} />
        <KeyValuePair keyText={'Doctors'} valueText={singleWard?.doctors} />
      </DataContainer>
    </MainContainer>
  );
};
