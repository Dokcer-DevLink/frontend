import { getSince } from '@/utils/getSince';
import {
  Blank,
  ChatedAt,
  Message,
  MyChat,
  OpponentChat,
  UserImage,
  Wrapper,
} from './ChatDetail.style';
import { useEffect, useRef } from 'react';

type ChatDetail = {};

type ChatDetailProps = {
  chatDetail: any;
};

export const ChatDetail = ({ chatDetail }: ChatDetailProps) => {
  const { messages } = chatDetail;
  const ChatDetailRef = useRef(null);
  useEffect(() => {
    if (ChatDetailRef.current) {
      ChatDetailRef.current.scrollTop = 99999;
    }
  }, []);
  return (
    <Wrapper ref={ChatDetailRef}>
      {messages.map((message, i) => {
        if (message.isMine) {
          return (
            <MyChat key={i}>
              {checkShowingChatedAt({ messages, i }) && (
                <ChatedAt>{getSince({ ISOTime: message.chatedAt })}</ChatedAt>
              )}
              <Message>{message.content}</Message>
            </MyChat>
          );
        }
        return (
          <OpponentChat key={i}>
            {checkShowingProfile({ messages, i }) ? (
              <UserImage src={chatDetail.user.image} />
            ) : (
              <Blank />
            )}
            <Message>{message.content}</Message>
            {checkShowingChatedAt({ messages, i }) && (
              <ChatedAt>{getSince({ ISOTime: message.chatedAt })}</ChatedAt>
            )}
          </OpponentChat>
        );
      })}
    </Wrapper>
  );
};

const checkShowingProfile = ({ messages, i }) => {
  if (i === 0) {
    return true;
  }
  if (messages[i - 1].isMine === true) {
    return true;
  }
  return false;
};

const checkShowingChatedAt = ({ messages, i }) => {
  if (i === messages.length - 1) {
    return true;
  }
  if (messages[i].isMine !== messages[i + 1].isMine) {
    return true;
  }

  if (
    getSince({ ISOTime: messages[i].chatedAt }) !==
    getSince({ ISOTime: messages[i + 1].chatedAt })
  ) {
    return true;
  }
  return false;
};
