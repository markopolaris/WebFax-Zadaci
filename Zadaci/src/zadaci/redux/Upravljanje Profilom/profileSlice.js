import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: '',
    bio: '',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
  },
});

export const { updateName, updateEmail, updateBio } = profileSlice.actions;
export default profileSlice.reducer;
