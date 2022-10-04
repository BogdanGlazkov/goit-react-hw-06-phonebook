import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/contactsActions';

export default createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Bart Simpson', number: '459-12-57' },
  ],
  {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  }
);
