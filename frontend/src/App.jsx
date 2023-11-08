import { Hospital } from './Features/Hospital';
import { Route, Routes } from 'react-router-dom';
import { routeName } from './App.routes';
import { Patient } from './Features/Patients/Patient';
import { Ward } from './Features/Wards/Ward';
import { PageWrapper } from './Components/PageWrapper';
import { SinglePatient } from './Features/Patients/SinglePatient';
import { SingleWard } from './Features/Wards/SingleWard';

function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path={routeName.HOSPITAL} element={<Hospital />} />
          <Route path={routeName.PATIENTS} element={<Patient />} />
          <Route path={routeName.WARD} element={<Ward />} />
          <Route path="/patients/:id" element={<SinglePatient />} />
          <Route path="/wards/:id" element={<SingleWard />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
