import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatients = createAsyncThunk('patients/allPatients', async () => {
  const response = await axios.get('/api/patients');
  return response.data?.allPatients;
});

export const createPatient = createAsyncThunk('patients/addPatient', async (patientData) => {
  const response = await axios.post('/api/patients', patientData);
  return response.data?.allPatients;
});

export const deletePatient = createAsyncThunk('patients/deletePatient', async (patientId) => {
  const response = await axios.delete(`/api/patients/${patientId}`);
  return response.data?.allPatients;
});

export const updatePatient = createAsyncThunk(
  'patients/updatePatient',
  async ({ id, updateData }) => {
    const response = await axios.post(`/api/patients/${id}`, updateData);
    return response.data?.allPatients;
  }
);

export const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    status: 'idle',
    error: null,
    patients: [],
    patient: null,
    patientStatus: 'idle',
    patientError: '',
    wizardStatus: 'idle',
    wizardError: '',
    lengthOfStay: null
  },
  reducers: {},
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.status = 'success';
      state.patients = action.payload;
    },
    [fetchPatients.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [createPatient.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [createPatient.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.patients = action.payload;
    },
    [createPatient.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [deletePatient.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [deletePatient.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.patients = action.payload;
    },
    [deletePatient.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [updatePatient.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [updatePatient.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.patients = action.payload;
    },
    [updatePatient.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    }
  }
});

export const patientReducer = patientSlice.reducer;
