import { axios } from '@/libraries/axios';

type createChatRoomProps = {
  targetUuid: string;
};

export const createChatRoom = ({ targetUuid }: createChatRoomProps) => {
  return axios.get('/chat-service/api/chat/createroom', {
    params: {
      targetUuid,
    },
  });
};
