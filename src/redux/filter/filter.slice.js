import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterAction } = filterSlice.actions;