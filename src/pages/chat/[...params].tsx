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
  const [targetUser, setTargetUser] = useState<UserType>();
  const [roomUuid, setRoomUuid] = useState('');

  const { params } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.length) {
      setRoomUuid(params[0]);
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
  }, [dispatch, params]);

  useEffect(() => {
    if (chatRooms !== null) {
      const filteredRooms = chatRooms.filter(
        (chatRoom: { roomUuid: string }, i: number) => {
          return chatRoom.roomUuid === roomUuid;
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
            console.log(result);
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
  }, [chatRooms, dispatch, roomUuid]);

  useEffect(() => {
    console.log(currentChatRoom);
    if (!currentChatRoom?.roomUuid) {
      return;
      // router.push('/chat');
    } else {
      (async () => {
        const result = await getUser({ userUuid: currentChatRoom.targetUuid });
        if (result) {
          setTargetUser({ ...result.data });
        }
      })();
    }
  }, [currentChatRoom]);

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
