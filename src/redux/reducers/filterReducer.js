import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from 'redux/actions/filterActions';

export default createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
