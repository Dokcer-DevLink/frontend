import { Empty } from '@/components/Elements';
import { Chat, ChatProps } from './Chat';
import { Wrapper } from './Chats.style';
import Link from 'next/link';

type ChatsProps = {
  chats: ChatProps[];
};

export const Chats = ({ chats }: ChatsProps) => {
  return (
    <Wrapper>
      {chats.length ? (
        chats.map((chat, i) => (
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
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
