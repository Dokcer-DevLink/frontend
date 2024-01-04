import { getSince } from '@/utils/getSince';
import {
  Blank,
  ChatedAt,
  ExitMessage,
  Message,
  MyChat,
  OpponentChat,
  UserImage,
  Wrapper,
} from './ChatDetail.style';
import { useEffect, useRef, useState } from 'react';
import { socket } from '@/libraries/stomp';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useDispatch, useSelector } from 'react-redux';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { Button, Empty } from '@/components/Elements';
import SockJS from 'sockjs-client';
import { getNowKr } from '@/utils/getNowKr';
import { chatSlice, getMessages } from '..';
import { UserType } from '@/features/users/type';
import { getUser } from '@/features/users';

type Message = {
  message: string;
  messageTime: string;
  roomUuid: string;
  senderUuid: string;
  type: 'TALK' | 'ENTER' | 'LEAVE' | 'EXITED';
};

export const ChatDetail = () => {
  const { roomUuid, targetUuid, messages } = useSelector(
    ({ chat }) => chat.currentChatRoom
  );
  const roomUuidRef = useRef();
  const userUuidRef = useRef();
  const { userUuid } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const ChatDetailRef = useRef<HTMLDivElement>(null);

  const [targetUser, setTargetUser] = useState<UserType>();

  useEffect(() => {
    if (!targetUuid) {
      return;
    }
    (async () => {
      const result = await getUser({ userUuid: targetUuid });
      if (result) {
        setTargetUser(result.data);
      }
    })();
  }, [targetUuid]);

  useEffect(() => {
    if (ChatDetailRef?.current) {
      if (isLoading) {
        ChatDetailRef.current.scrollTop = 0;
      } else {
        ChatDetailRef.current.scrollTop = 99999;
      }
    }
  }, [ChatDetailRef, messages]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connectStomp = () => {
    const socket = new SockJS(stompUrl);

    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, onConnected, onError);
  };

  useEffect(() => {
    if (!stompClient.current && roomUuid) {
      connectStomp();
    }
    roomUuidRef.current = roomUuid;
  }, [connectStomp, roomUuid]);

  useEffect(() => {
    return () => {
      leaveChatRoom();
      dispatch(chatSlice.actions.clearCurrentChatRoom(null));
    };
  }, []);

  useEffect(() => {
    userUuidRef.current = userUuid;
  }, [userUuid]);

  const stompUrl =
    'http://a7060712d3723400fab30f02a3dfe536-ee295aeb3a83ef10.elb.ap-northeast-2.amazonaws.com/ws-stomp/';
  const stompClient = useRef<CompatClient>();

  const onConnected = () => {
    dispatch(chatSlice.actions.setCurrentStompClient(stompClient));
    stompClient.current?.subscribe(
      '/sub/chat/room/' + roomUuid,
      onMessageReceived,
      { id: roomUuid }
    );

    sendSessionInfo();
    sendEnterMessage();
  };

  const onMessageReceived = (payload: { body: string }) => {
    let chat = JSON.parse(payload.body);
    console.log(payload, chat);

    dispatch(chatSlice.actions.addCurrentChatRoomMessage(chat));
  };

  const sendSessionInfo = () => {
    stompClient?.current?.send(
      '/pub/chat/sessions',
      {},
      JSON.stringify({
        roomUuid,
        senderUuid: userUuid,
        messageTime: getNowKr(),
        type: 'ENTER',
      })
    );
  };

  const sendEnterMessage = () => {
    if (stompClient?.current) {
      stompClient?.current?.send(
        '/pub/send',
        {},
        JSON.stringify({
          roomUuid,
          senderUuid: userUuid,
          messageTime: getNowKr(),
          type: 'ENTER',
        })
      );
    }
  };

  const onError = (error: any) => {
    console.error(error);
  };

  const leaveChatRoom = () => {
    console.log(roomUuid, targetUuid, messages, roomUuidRef);
    console.log('leaveChatRoom!', roomUuid, stompClient?.current);
    if (stompClient?.current) {
      stompClient.current.send(
        '/pub/chat/leave',
        {},
        JSON.stringify({
          roomUuid: roomUuidRef.current,
          senderUuid: userUuidRef.current,
          type: 'LEAVE',
        })
      );
      stompClient.current.disconnect(roomUuidRef.current);
    }
  };

  // Infinity Scroll

  const target = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(false);

  useEffect(() => {
    console.log(isLoading);
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  const getItems = async () => {
    try {
      const result = await getMessages({
        roomUuid,
        beforeTime: messages[0].messageTime,
      });
      if (result.data.last) {
        setIsLast(true);
        console.log('Last!!!!');
      }
      console.log(result);
      dispatch(
        chatSlice.actions.addCurrentChatRoomMessages(result.data.content)
      );

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onIntersect = async (
    [entry]: any,
    observer: { observe: (arg0: any) => void }
  ) => {
    if (entry.isIntersecting) {
      if (isLoading || isLast) {
        return;
      }
      setIsLoading(true);
      (async () => {
        setTimeout(() => getItems(), 500);
      })();
      console.log('intersect');
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      if (target) {
        observer = new IntersectionObserver(onIntersect, {
          threshold: 0.4,
        });
        observer.observe(target.current);
      }
    }
    return () => observer && observer.disconnect();
  }, [onIntersect, target]);

  if (messages.length === 0) {
    return <Empty />;
  }

  return (
    <Wrapper ref={ChatDetailRef}>
      <div ref={target}></div>
      {messages.map((message: Message, i: number) => {
        if (message?.senderUuid === targetUuid) {
          console.log(message);
          if (message.type === 'EXITED') {
            return (
              <ExitMessage key={i}>상대방이 채팅방을 나갔습니다</ExitMessage>
            );
          }
          return (
            <MyChat key={i}>
              {checkShowingChatedAt({ messages, i, targetUuid }) && (
                <ChatedAt>
                  {getSince({ ISOTime: message.messageTime })}
                </ChatedAt>
              )}
              <Message>{message.message}</Message>
            </MyChat>
          );
        }
        return (
          <OpponentChat key={i}>
            {checkShowingProfile({ messages, i }) ? (
              <UserImage
                src={
                  targetUser?.profileImageUrl
                    ? targetUser.profileImageUrl
                    : NoProfileUser.src
                }
              />
            ) : (
              <Blank />
            )}
            <Message>{message.message}</Message>
            {checkShowingChatedAt({ messages, i, targetUuid }) && (
              <ChatedAt>{getSince({ ISOTime: message.messageTime })}</ChatedAt>
            )}
          </OpponentChat>
        );
      })}
    </Wrapper>
  );
};

const checkShowingProfile = ({
  messages,
  i,
}: {
  messages: Message[];
  i: number;
}) => {
  if (i === 0) {
    return true;
  }
  if (messages[i - 1].senderUuid !== messages[i].senderUuid) {
    return true;
  }
  return false;
};

const checkShowingChatedAt = ({
  messages,
  i,
  targetUuid,
}: {
  messages: Message[];
  i: number;
  targetUuid: string;
}) => {
  if (i === messages.length - 1) {
    return true;
  }
  if (messages[i].senderUuid !== messages[i + 1].senderUuid) {
    return true;
  }

  if (
    getSince({ ISOTime: messages[i].messageTime }) !==
    getSince({ ISOTime: messages[i + 1].messageTime })
  ) {
    return true;
  }
  return false;
};
