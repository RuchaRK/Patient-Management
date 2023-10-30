import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWards = createAsyncThunk('wards/allWards', async () => {
  const response = await axios.get('/api/wards');
  return response.data?.allWards;
});

export const fetchAWard = createAsyncThunk('wards/fetchAWard', async (wardId) => {
  const response = await axios.get(`/api/wards/${wardId}`);
  return response.data?.ward;
});

export const createWard = createAsyncThunk('wards/addWard', async (wardData) => {
  const response = await axios.post('/api/wards', wardData);
  return response.data?.allWards;
});

export const deleteWard = createAsyncThunk('wards/deleteWard', async (wardId) => {
  const response = await axios.delete(`/api/wards/${wardId}`);
  return response.data?.allWards;
});

export const updateWard = createAsyncThunk('wards/updateWard', async ({ id, updateData }) => {
  const response = await axios.post(`/api/wards/${id}`, updateData);
  return response.data?.allWards;
});

export const wardSlice = createSlice({
  name: 'wards',
  initialState: {
    status: 'idle',
    error: null,
    teachers: [],
    teacher: null,
    wizardStatus: 'idle',
    wizardError: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchWards.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchWards.fulfilled]: (state, action) => {
      state.status = 'success';
      state.teachers = action.payload;
    },
    [fetchWards.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [fetchAWard.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAWard.fulfilled]: (state, action) => {
      state.status = 'success';
      state.teacher = action.payload;
    },
    [fetchAWard.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [createWard.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [createWard.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [createWard.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [deleteWard.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [deleteWard.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [deleteWard.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [updateWard.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [updateWard.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [updateWard.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    }
  }
});

export const wardReducer = wardSlice.reducer;
