import Head from 'next/head';
import { Header, MainLayout } from '@/components/Layout';
import { Button } from '@/components/Elements';
import { useRouter } from 'next/router';

import { FaArrowLeft } from 'react-icons/fa';
import { Buttons, Inner } from './profile.style';
import { useState } from 'react';
import { Profile } from '@/features/users';
import { MyPosts, VerticalPostProps } from '@/features/posts';

import k8s from '@/assets/images/k8s.png';
import { MyMentorings } from '@/features/mentorings';
import { MentoringProps } from '@/features/mentorings/components/Mentoring';

export default function MyProfile() {
  const [selectedTap, setSelectedTap] = useState('profile');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Header
          title="내 프로필"
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
        />
        <Inner>
          <Buttons>
            <Button
              isoutlined={selectedTap === 'profile' ? false : true}
              justifycontent="center"
              onclick={() => setSelectedTap('profile')}
            >
              내 프로필
            </Button>
            <Button
              isoutlined={selectedTap === 'posts' ? false : true}
              justifycontent="center"
              onclick={() => setSelectedTap('posts')}
            >
              게시물 목록
            </Button>
            <Button
              isoutlined={selectedTap === 'mentorings' ? false : true}
              justifycontent="center"
              onclick={() => setSelectedTap('mentorings')}
            >
              멘토링 목록
            </Button>
          </Buttons>
          {selectedTap === 'profile' ? (
            <Profile />
          ) : selectedTap === 'posts' ? (
            <MyPosts
              postsAsMentor={postsAsMentor}
              postsAsMentee={postsAsMentee}
            />
          ) : (
            <MyMentorings
              mentoringsAsMentor={mentoringsAsMentor}
              mentoringsAsMentee={mentoringsAsMentee}
            />
          )}
        </Inner>
      </MainLayout>
    </>
  );
}

const postsAsMentor: VerticalPostProps[] = [];

const postsAsMentee: VerticalPostProps[] = [
  {
    image: k8s.src,
    title: '멘토 급구! ',
    skill: 'React',
    region: '동작구',
  },
  {
    image: null,
    title: '멘토 급구! ',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: null,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
];

const mentoringsAsMentor: MentoringProps[] = [];

const mentoringsAsMentee: MentoringProps[] = [
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
  {
    title: '동작구 멘토 구합니다',
    promisedAt: '2023-12-19',
    region: '서울특별시 동작구 노량진동',
    status: '완료',
  },
];
