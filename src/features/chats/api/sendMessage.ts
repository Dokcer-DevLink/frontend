import { axios } from '@/libraries/axios';
import { getNowKr } from '@/utils/getNowKr';

type sendMessageProps = {
  roomUuid: string;
  senderUuid: string;
  message: string;
};

export const sendMessage = ({
  roomUuid,
  senderUuid,
  message,
}: sendMessageProps) => {
  console.log(roomUuid, senderUuid, message);
  return axios.post('/chat-service/send', {
    roomUuid,
    senderUuid,
    message,
    messageTime: getNowKr(),
    type: 'TALK',
  });
};
