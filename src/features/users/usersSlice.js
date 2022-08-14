import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Mary'},
  { id: 3, name: 'PogChampJunior'}
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const getUsers = (state) => state.users;

export default usersSlice.reducer;