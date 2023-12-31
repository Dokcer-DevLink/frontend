import React, { useEffect, useState } from 'react';
import {
  ButtomNavigation,
  ContentSection,
  Logo,
  SectionHeader,
  SideNavigation,
  SideSection,
  Wrapper,
} from './MainLayout.style';
import { Button } from '@/components/Elements';

import LogoSidename from '@/assets/images/logo-sidename.png';
import Link from 'next/link';

import { HiHome } from 'react-icons/hi';
import { MdOutlineSearch } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa6';
import { GrMagic } from 'react-icons/gr';
import { IoIosChatbubbles } from 'react-icons/io';
import { RiUser3Fill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { OnBoarding } from '@/features/misc';
import { Alerts } from '@/features/alert';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile, profileSlice } from '@/features/users';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { route } = useRouter();
  const userUuid = useSelector(({ auth }) => auth.userUuid);
  const nickname = useSelector(({ profile }) => profile.nickname);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userUuid && !nickname) {
      (async () => {
        const result = await getMyProfile();
        dispatch(profileSlice.actions.setProfile({ ...result.data.profile }));
      })();
    }
  }, [userUuid, nickname, dispatch]);

  return (
    <Wrapper>
      <SideSection left="0">
        <Link href="/">
          <Logo src={LogoSidename.src} width="150px" />
        </Link>
        <SideNavigation>
          {navigationButtons.map((button, i) => (
            <Link key={i} href={button.url}>
              <Button
                startIcon={
                  route === button.url ? button.icons[0] : button.icons[1]
                }
                variant="background"
                textstyle="title"
                size="medium"
                fontweight={route === button.url ? 500 : 400}
              >
                {button.name}
              </Button>
            </Link>
          ))}
        </SideNavigation>
      </SideSection>
      <ContentSection>
        {children}
        <ButtomNavigation>
          {navigationButtons.map((button, i) => {
            if (button.name === '검색') {
              return;
            }
            return (
              <Link key={i} href={button.url}>
                <Button
                  startIcon={
                    route === button.url ? button.icons[2] : button.icons[3]
                  }
                  variant="background"
                  textstyle="label"
                  size="medium"
                  flexdirection="column"
                  fontweight={route === button.url ? 500 : 400}
                >
                  {button.name}
                </Button>
              </Link>
            );
          })}
        </ButtomNavigation>
      </ContentSection>
      <SideSection right="0">
        {userUuid ? (
          <Alerts />
        ) : (
          <>
            <SectionHeader>
              <Link href="/auth/login" style={{ width: '100%' }}>
                <Button justifycontent="center">로그인</Button>
              </Link>
              <Link href="/auth/join" style={{ width: '100%' }}>
                <Button
                  variant="primary"
                  isoutlined={true}
                  justifycontent="center"
                >
                  회원가입
                </Button>
              </Link>
            </SectionHeader>
            <OnBoarding />
          </>
        )}
      </SideSection>
    </Wrapper>
  );
};

const navigationButtons = [
  {
    name: '홈',
    icons: [
      <HiHome key={0} size="30" />,
      <HiHome key={1} size="26" />,
      <HiHome key={2} size="24" />,
      <HiHome key={3} size="20" />,
    ],
    url: '/',
  },
  {
    name: '검색',
    icons: [
      <MdOutlineSearch key={0} size="30" />,
      <MdOutlineSearch key={1} size="26" />,
      <MdOutlineSearch key={2} size="24" />,
      <MdOutlineSearch key={3} size="20" />,
    ],
    url: '/search',
  },
  {
    name: '나의 멘토링',
    icons: [
      <FaHandshake key={0} size="30" />,
      <FaHandshake key={1} size="26" />,
      <FaHandshake key={2} size="24" />,
      <FaHandshake key={3} size="20" />,
    ],
    url: '/my-page/profile?tap=mentoring',
  },
  {
    name: '자동 매칭',
    icons: [
      <GrMagic key={0} size="30" />,
      <GrMagic key={1} size="26" />,
      <GrMagic key={2} size="24" />,
      <GrMagic key={3} size="20" />,
    ],
    url: '/auto-match',
  },
  {
    name: '채팅 목록',
    icons: [
      <IoIosChatbubbles key={0} size="30" />,
      <IoIosChatbubbles key={1} size="26" />,
      <IoIosChatbubbles key={2} size="24" />,
      <IoIosChatbubbles key={3} size="20" />,
    ],
    url: '/chat',
  },
  {
    name: '마이페이지',
    icons: [
      <RiUser3Fill key={0} size="30" />,
      <RiUser3Fill key={1} size="26" />,
      <RiUser3Fill key={2} size="24" />,
      <RiUser3Fill key={3} size="20" />,
    ],
    url: '/my-page',
  },
];
