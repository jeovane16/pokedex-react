import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  avatar: ''
}

const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    setedTrainer(state, action) {
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
    }
  }
});

export default trainerSlice.reducer;
export const { setedTrainer } = trainerSlice.actions