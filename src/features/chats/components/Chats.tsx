import { Empty } from '@/components/Elements';
import { Chat, ChatProps } from './Chat';
import { Wrapper } from './Chats.style';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Key } from 'react';

import k8s from '@/assets/images/k8s.png';

export const Chats = () => {
  const chats = useSelector(({ chat }) => chat.chatRooms);
  console.log(chats);
  return (
    <Wrapper>
      {chats?.length ? (
        chats.map((chat: ChatProps, i: number) => (
          <Link href={`/chat/${chat.roomUuid}`} key={i}>
            <Chat
              key={i}
              targetUuid={chat.targetUuid}
              imageUrl={chat.imageUrl}
              targetNickname={chat.targetNickname}
              roomUuid={chat.roomUuid}
              messageNotRead={chat.messageNotRead}
              recentDate={chat.recentDate}
              recentMessage={chat.recentMessage}
            />
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

// const emptyChats: ChatProps[] = [];

// const chats: ChatProps[] = [
//   {
//     id: '1',
//     userImage: k8s.src,
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 0,
//   },
//   {
//     id: '2',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 5,
//   },
//   {
//     id: '3',
//     userImage: k8s.src,
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 999,
//   },
//   {
//     id: '4',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 0,
//   },
//   {
//     id: '5',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 0,
//   },
//   {
//     id: '6',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 5,
//   },
//   {
//     id: '7',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 999,
//   },
//   {
//     id: '8',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 0,
//   },
//   {
//     id: '9',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 0,
//   },
//   {
//     id: '10',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 5,
//   },
//   {
//     id: '11',
//     nickname: '김재만',
//     recentChatedAt: '2023-12-19',
//     recentMessage:
//       '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
//     unconfirmedMessageNumber: 999,
//   },
// ];
