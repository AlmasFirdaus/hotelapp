import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  wishlist: [],
};

export const loginUser = createAsyncThunk('profile/loginUser', async ({ username, password, redirect, notFound }) => {
  try {
    if (username === 'hacktiv8' && password === 'ks05') {
      // redirect(true)
      return true;
    }
  } catch (error) {
    throw error(error);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    // login:(state, action) => {
    //     {pass}
    //     if(username === "hacktiv8" && password === "ks05"){
    //         state.isLogin = true
    //     }
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = true;
    });
  },
});

export default profileSlice.reducer;
