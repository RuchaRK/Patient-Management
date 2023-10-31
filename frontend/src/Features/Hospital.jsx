import styled from '@emotion/styled';
import { FaUserInjured, FaHospitalUser } from 'react-icons/fa';
import { BiSolidInjection } from 'react-icons/bi';
import { GiTrophy } from 'react-icons/gi';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
  display: flex;

  background: linear-gradient(
    90deg,
    rgba(75, 192, 242, 0.65) 20.1%,
    rgba(52, 134, 243, 0.64) 30.48%,
    rgba(35, 89, 244, 0.63) 74.72%,
    rgba(6, 16, 245, 0.62) 99.95%
  );
  height: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-wrap: wrap;
  padding: 23px 67px;
  gap: 40px;
`;

const InfoCard = styled.div`
  display: flex;
  padding: 20px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  width: 226px;
  height: 113px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RightContainer = styled.div`
  width: 500px;
  flex: 0.5;
  background:
    url(/images/doctor.png),
    lightgray 50% / cover no-repeat;
`;

export const Hospital = () => {
  const { wards } = useSelector((state) => state.wards);
  const { patients } = useSelector((state) => state.patients);
  return (
    <MainContainer>
      <LeftContainer>
        <InfoCard>
          <FaUserInjured size={40} />
          <Content>
            <h5>Total Patients</h5>
            <h5>{patients.length}</h5>
          </Content>
        </InfoCard>

        <InfoCard>
          <BiSolidInjection size={40} />
          <Content>
            <h5>Total Doctors</h5>
            <h5>20</h5>
          </Content>
        </InfoCard>

        <InfoCard>
          <FaHospitalUser size={40} />
          <Content>
            <h5>Total Ward</h5>
            <h5>{wards.length}</h5>
          </Content>
        </InfoCard>

        <InfoCard>
          <GiTrophy size={40} />
          <Content>
            <h5>Ward with very less patients</h5>
            <h5>100</h5>
          </Content>
        </InfoCard>

        <InfoCard>
          <GiTrophy size={40} />
          <Content>
            <h5>Ward with best labs</h5>
            <h5>100</h5>
          </Content>
        </InfoCard>

        <InfoCard>
          <GiTrophy size={40} />
          <Content>
            <h5>Ward with quick patient </h5>
            <h5>100</h5>
          </Content>
        </InfoCard>
      </LeftContainer>
      <RightContainer></RightContainer>
    </MainContainer>
  );
};
