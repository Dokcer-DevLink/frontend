import { Header, MainLayout } from '@/components/Layout';
import {
  Buttons,
  Inner,
  Nickname,
  Profile,
} from '@/styles/pageStyles/chat/[...params].style';
import { Button } from '@/components/Elements';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  ChatDetail,
  ChatForm,
  ChatHamburgerMenu,
  ExitChat,
  ReportChat,
  chatSlice,
  getMessages,
  getChatRooms,
} from '@/features/chats';

import k8s from '@/assets/images/k8s.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createChatRoom } from '@/features/chats/api/createChatRoom';
import { getNowKr } from '@/utils/getNowKr';
import { UserType } from '@/features/users/type';
import { getUser } from '@/features/users';

export default function Chat() {
  const router = useRouter();
  const { chatRooms, currentChatRoom } = useSelector(({ chat }) => chat);
  const [targetUuid, setTargetUuid] = useState('');
  const [targetUser, setTargetUser] = useState<UserType>();

  const { params } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!targetUuid) {
      setTargetUuid(params[0]);
    } else {
      (async () => {
        try {
          const result = await getChatRooms();
          dispatch(chatSlice.actions.setChatRooms(result.data));
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [dispatch, params, targetUuid]);

  useEffect(() => {
    if (chatRooms !== null) {
      const filteredRooms = chatRooms.filter(
        (chatRoom: { targetUuid: string }, i: number) => {
          return chatRoom.targetUuid === targetUuid;
        }
      );

      if (filteredRooms.length === 0) {
      } else if (filteredRooms.length) {
        try {
          const filteredRoom = filteredRooms[0];
          (async () => {
            const result = await getMessages({
              roomUuid: filteredRoom.roomUuid,
              beforeTime: getNowKr(),
            });
            dispatch(
              chatSlice.actions.setCurrentChatRoom({
                ...filteredRoom,
                messages: result.data.content,
              })
            );
          })();
        } catch (error) {
          console.error(error);
        }
      }
    }

    console.log(targetUuid);
    if (targetUuid) {
      console.log(targetUuid);
      (async () => {
        const result = await getUser({ userUuid: targetUuid });
        if (result) {
          setTargetUser({ ...result.data });
        }
      })();
    }
  }, [chatRooms, dispatch, targetUuid]);

  useEffect(() => {
    if (!currentChatRoom?.roomUuid) {
      (async () => {
        try {
          if (!targetUuid) {
            return;
          }
          const result = await createChatRoom({ targetUuid });
          dispatch(
            chatSlice.actions.setCurrentChatRoom({
              roomUuid: result.data.roomUuid,
              targetUuid,
              messages: [],
              messageNotRead: null,
              recentDate: null,
              recentMessage: null,
            })
          );
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [currentChatRoom, dispatch, targetUuid]);

  return (
    <MainLayout>
      <Header
        title={targetUser?.nickname}
        leftbuttons={
          <Button
            textstyle="title"
            size="large"
            variant="background"
            padding="2px"
            startIcon={<FaArrowLeft />}
            onclick={() => router.back()}
          />
        }
        rightbuttons={<ChatHamburgerMenu />}
      />
      <Inner>
        <Profile>
          <Nickname>{targetUser?.nickname}</Nickname>
          <ChatHamburgerMenu />
        </Profile>
        <ChatDetail />
        <ChatForm />
      </Inner>
    </MainLayout>
  );
}
