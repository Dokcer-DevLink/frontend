import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatRooms: null,
    currentChatRoom: {
      messageNotRead: null,
      recentDate: null,
      recentMessage: null,
      roomUuid: null,
      targetUuid: null,
      messages: [],
      stompClient: null,
    },
  },
  reducers: {
    setChatRooms(state, action) {
      state.chatRooms = action.payload;
    },
    clearChatRooms(state, action) {
      state.chatRooms = null;
    },
    setCurrentChatRoom(state, action) {
      state.currentChatRoom = action.payload;
    },
    addCurrentChatRoomMessage(state, action) {
      console.log(state, action);
      state.currentChatRoom = {
        ...state.currentChatRoom,
        messages: [...state.currentChatRoom.messages, action.payload],
      };
    },
    setCurrentStompClient(state, action) {
      state.currentChatRoom.stompClient = action.payload;
    },
    clearCurrentChatRoom(state, action) {
      console.log(state, action);
      state.currentChatRoom = {
        messageNotRead: null,
        recentDate: null,
        recentMessage: null,
        roomUuid: null,
        targetUuid: null,
        messages: [],
        stompClient: null,
      };
    },
  },
});
