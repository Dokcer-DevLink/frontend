import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { userUuid: null, accessToken: null, refreshToken: null },
  reducers: {
    setAuth(state, action) {
      state.userUuid = action.payload.userUuid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state, action) {
      state.userUuid = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});
