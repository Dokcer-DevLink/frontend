import { Empty } from '@/components/Elements';
import { Chat, ChatProps } from './Chat';
import { Wrapper } from './Chats.style';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Key } from 'react';

import k8s from '@/assets/images/k8s.png';

type ChatsProps = {
  chats: ChatProps[];
};

export const Chats = () => {
  const chats = useSelector(({ chat }) => chat);
  return (
    <Wrapper>
      {chats?.length ? (
        chats.map(
          (
            chat: {
              id: string;
              userImage: string | undefined;
              nickname: string;
              recentChatedAt: string;
              recentMessage: string;
              unconfirmedMessageNumber: Number;
            },
            i: number
          ) => (
            <Link href={`/chat/${chat.id}`} key={i}>
              <Chat
                key={i}
                id={chat.id}
                userImage={chat?.userImage}
                nickname={chat.nickname}
                recentChatedAt={chat.recentChatedAt}
                recentMessage={chat.recentMessage}
                unconfirmedMessageNumber={chat.unconfirmedMessageNumber}
              />
            </Link>
          )
        )
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

const emptyChats: ChatProps[] = [];

const chats: ChatProps[] = [
  {
    id: '1',
    userImage: k8s.src,
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 0,
  },
  {
    id: '2',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 5,
  },
  {
    id: '3',
    userImage: k8s.src,
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 999,
  },
  {
    id: '4',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 0,
  },
  {
    id: '5',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 0,
  },
  {
    id: '6',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 5,
  },
  {
    id: '7',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 999,
  },
  {
    id: '8',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 0,
  },
  {
    id: '9',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 0,
  },
  {
    id: '10',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 5,
  },
  {
    id: '11',
    nickname: '김재만',
    recentChatedAt: '2023-12-19',
    recentMessage:
      '도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요 도와주세요',
    unconfirmedMessageNumber: 999,
  },
];
