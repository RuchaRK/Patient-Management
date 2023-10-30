import { configureStore } from '@reduxjs/toolkit';
import { patientReducer } from './Reducers/patientSlice';
import { wardReducer } from './Reducers/wardSlice';

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    wards: wardReducer
  }
});
