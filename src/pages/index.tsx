import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Button, Empty, Slider } from '@/components/Elements';
import { Header, MainLayout } from '@/components/Layout';
import { HorizontalPost, WritePost, getPosts } from '@/features/posts';
import { HorizontalUser, getRecomendedUsers } from '@/features/users';
import { Inner, PostSeeAll, UserSeeAll } from '@/styles/pageStyles/index.style';
import Link from 'next/link';

import k8s from '@/assets/images/k8s.png';
import { MdOutlineSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { AlertsMenu } from '@/features/alert';
import { useSelector } from 'react-redux';
import { getRecomendedPosts } from '@/features/posts/api/getRecommendedPosts';
import { axios } from '@/libraries/axios';
import { PostType } from '@/features/posts/type';
import { UserType } from '@/features/users/type';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [recomendedMentorPosts, setRecomendedMentorPosts] = useState<
    PostType[]
  >([]);
  const [recomendedMenteePosts, setRecomendedMenteePosts] = useState<
    PostType[]
  >([]);

  const [recomendedMentors, setRecomendedMentors] = useState<UserType[]>([]);
  const [recomendedMentees, setRecomendedMentees] = useState<UserType[]>([]);

  const userUuid = useSelector(({ auth }) => auth.userUuid);
  useEffect(() => {
    (async () => {
      const result = await getRecomendedPosts({ postType: 'MENTOR' });
      setRecomendedMentorPosts(result.data.content);
    })();
    (async () => {
      const result = await getRecomendedPosts({ postType: 'MENTEE' });
      setRecomendedMenteePosts(result.data.content);
    })();

    (async () => {
      const result = await getRecomendedUsers({ profileType: 'MENTOR' });
      console.log(result);
      setRecomendedMentors(result.data);
    })();

    (async () => {
      const result = await getRecomendedUsers({ profileType: 'MENTEE' });
      console.log(result);
      setRecomendedMentees(result.data);
    })();
  }, []);
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
          rightbuttons={
            userUuid ? (
              <AlertsMenu />
            ) : (
              <>
                <Link href="/auth/login">
                  <Button>로그인</Button>
                </Link>
                <Link href="/auth/join">
                  <Button variant="primary" isoutlined={true}>
                    회원가입
                  </Button>
                </Link>
              </>
            )
          }
          leftbuttons={
            <Link href="/search">
              <Button
                startIcon={<MdOutlineSearch size="30" />}
                variant="background"
                padding="2px"
              />
            </Link>
          }
        />
        <Inner>
          <Slider
            title="추천 멘토 게시물"
            link="/search?list=posts&role=mentor"
          >
            {recomendedMentorPosts.length ? (
              <>
                {recomendedMentorPosts.map((post, i) => (
                  <Link href={`/post/${post.postUuid}`} key={i}>
                    <HorizontalPost
                      postUuid={post.postUuid}
                      postImageUrl={post.postImageUrl}
                      address={post.address}
                      postTitle={post.postTitle}
                      stacks={post.stacks}
                      postType={post.postType}
                      description={''}
                      unitTimeCount={0}
                      onOffline={'ONLINE'}
                    />
                  </Link>
                ))}
                <Link href="/search?list=posts&role=mentor">
                  <PostSeeAll>추천멘토 게시물 모두 보기</PostSeeAll>
                </Link>
              </>
            ) : (
              <>
                <PostSeeAll>
                  <Empty />
                </PostSeeAll>
              </>
            )}
          </Slider>
          <Slider
            title="추천 멘티 게시물"
            link="/search?list=posts&role=mentee"
          >
            {recomendedMenteePosts.length ? (
              <>
                {recomendedMenteePosts.map((post, i) => (
                  <Link href={`/post/${post.postUuid}`} key={i}>
                    <HorizontalPost
                      postUuid={post.postUuid}
                      postImageUrl={post.postImageUrl}
                      address={post.address}
                      postTitle={post.postTitle}
                      stacks={post.stacks}
                      postType={post.postType}
                      description={''}
                      unitTimeCount={0}
                      onOffline={'ONLINE'}
                    />
                  </Link>
                ))}
                <Link href="/search?list=posts&role=mentee">
                  <PostSeeAll>추천멘티 게시물 모두 보기</PostSeeAll>
                </Link>
              </>
            ) : (
              <>
                <PostSeeAll>
                  <Empty />
                </PostSeeAll>
              </>
            )}
          </Slider>
          <Slider title="추천 멘토" link="/search?list=users&role=mentor">
            {recomendedMentors.length ? (
              <>
                {recomendedMentors.map((user, i) => (
                  <Link key={i} href={`/user/${user.userUuid}`}>
                    <HorizontalUser
                      userUuid={user.userUuid}
                      profileImageUrl={user.profileImageUrl}
                      nickname={user.nickname}
                      stacks={user.stacks}
                      address={user.address}
                      githubAddress={user.githubAddress}
                    />
                  </Link>
                ))}
                <Link href="/search?list=users&role=mentor">
                  <UserSeeAll>추천 멘토 모두 보기</UserSeeAll>
                </Link>
              </>
            ) : (
              <>
                <UserSeeAll>
                  <Empty />
                </UserSeeAll>
              </>
            )}
          </Slider>
          <Slider title="추천 멘티" link="/search?list=users&role=mentee">
            {recomendedMentees.length ? (
              <>
                {recomendedMentees.map((user, i) => (
                  <Link key={i} href={`/user/${user.userUuid}`}>
                    <HorizontalUser
                      userUuid={user.userUuid}
                      profileImageUrl={user.profileImageUrl}
                      nickname={user.nickname}
                      stacks={user.stacks}
                      address={user.address}
                      githubAddress={user.githubAddress}
                    />
                  </Link>
                ))}
                <Link href="/search?list=users&role=mentee">
                  <UserSeeAll>추천 멘티 모두 보기</UserSeeAll>
                </Link>
              </>
            ) : (
              <UserSeeAll>
                <Empty />
              </UserSeeAll>
            )}
          </Slider>
        </Inner>
      </MainLayout>
      <WritePost />
    </>
  );
}
