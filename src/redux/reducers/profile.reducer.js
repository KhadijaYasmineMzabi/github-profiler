import { createSlice } from '@reduxjs/toolkit'
import { fetchUserProfile } from '../actions/profile.actions'

const initialState = { 
  userData: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
      addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userData = action.payload;
    })
  },
});

export default profileSlice.reducer;
