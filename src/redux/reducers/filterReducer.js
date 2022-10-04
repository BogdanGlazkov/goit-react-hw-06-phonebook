import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from '../actions/filterActions';

export default createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
