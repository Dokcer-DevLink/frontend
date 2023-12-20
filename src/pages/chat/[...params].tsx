import { Header, MainLayout } from '@/components/Layout';
import { Buttons, Inner, Nickname, Profile } from './[...params].style';
import { Button } from '@/components/Elements';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  ChatDetail,
  ChatForm,
  ChatHamburgerMenu,
  ExitChat,
  ReportChat,
} from '@/features/chats';

import k8s from '@/assets/images/k8s.png';

export default function Detail() {
  const router = useRouter();

  return (
    <MainLayout>
      <Header
        title={chatDetail.user.nickname}
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
          <Nickname>{chatDetail.user.nickname}</Nickname>
          <ChatHamburgerMenu />
        </Profile>
        <ChatDetail chatDetail={chatDetail} />
        <ChatForm />
      </Inner>
    </MainLayout>
  );
}

const date = new Date();
const now = new Date();

const someMinutesAgo = new Date(date.setMinutes(date.getMinutes() - 7));
const someMinutesAgo2 = new Date(date.setMinutes(date.getMinutes() - 13));
const someMinutesAgo3 = new Date(date.setMinutes(date.getMinutes() - 14));

const someHoursAgo = new Date(date.setHours(date.getHours() - 2));
const someHoursAgo2 = new Date(date.setHours(date.getHours() - 2));
const someHoursAgo3 = new Date(date.setHours(date.getHours() - 2));

const someDatesAgo = new Date(date.setDate(date.getDate() - 2));
const someDatesAgo2 = new Date(date.setDate(date.getDate() - 2));
const someDatesAgo3 = new Date(date.setDate(date.getDate() - 2));

const chatDetail = {
  user: {
    nickname: '우주최강멘토',
    image: k8s.src,
  },
  messages: [
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someDatesAgo3.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅠㅠㅠ',
      chatedAt: someDatesAgo3.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someDatesAgo2.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someDatesAgo2.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someDatesAgo.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someDatesAgo.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someHoursAgo3.toISOString(),
    },

    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someHoursAgo3.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someHoursAgo2.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someHoursAgo.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someHoursAgo.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someMinutesAgo3.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someMinutesAgo3.toISOString(),
    },
    {
      isMine: false,
      content: '더욱 정진하거라 ㅋㅋㅋ',
      chatedAt: someMinutesAgo2.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someMinutesAgo2.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: someMinutesAgo.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: now.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: now.toISOString(),
    },
    {
      isMine: true,
      content: '넵 ㅜㅜ',
      chatedAt: now.toISOString(),
    },
  ],
};

const myProfile = {
  nickname: '김재만',
};
