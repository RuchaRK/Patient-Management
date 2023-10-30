import { Hospital } from './Features/Hospital';
import { Route, Routes } from 'react-router-dom';
import { routeName } from './App.routes';
import { Patient } from './Features/Patients/Patient';
// import { Ward } from './Features/Wards';
import { PageWrapper } from './Components/PageWrapper';
import './App.css';

function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path={routeName.HOSPITAL} element={<Hospital />} />
          <Route path={routeName.PATIENTS} element={<Patient />} />
          {/* <Route path={routeName.WARD} element={<Ward />} /> */}
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
