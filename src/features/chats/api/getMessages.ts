import { axios } from '@/libraries/axios';

type getChatRoomProps = {
  roomUuid: string;
  beforeTime: string;
};

export const getMessages = ({ roomUuid, beforeTime }: getChatRoomProps) => {
  console.log(roomUuid, beforeTime);
  return axios.get('/chat-service/api/chat', {
    params: { roomUuid, beforeTime },
  });
};
