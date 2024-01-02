import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    nickname: null,
    career: null,
    githubAddress: null,
    introduction: null,
    address: null,
    imageUrl: null,
    stacks: [],
  },
  reducers: {
    setProfile(state, action) {
      console.log(action);
      state.address = action.payload.address;
      state.nickname = action.payload.nickname;
      state.career = action.payload.career;
      state.githubAddress = action.payload.githubAddress;
      state.introduction = action.payload.introduction;
      state.imageUrl = action.payload.profileImageUrl;
      state.stacks = action.payload.stacks;
    },
    clearProfile(state, action) {
      state.address = null;
      state.nickname = null;
      state.career = null;
      state.githubAddress = null;
      state.introduction = null;
      state.imageUrl = null;
      state.stacks = [];
    },
  },
});
