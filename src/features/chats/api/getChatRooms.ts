import { axios } from '@/libraries/axios';

export const getChatRooms = () => {
  return axios.get('/chat-service/api/chat/rooms');
};
