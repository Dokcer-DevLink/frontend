import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: { chatRooms: null, recentChat: null },
  reducers: {
    setChatRooms(state, action) {
      state.chatRooms = action.payload;
    },
  },
});
