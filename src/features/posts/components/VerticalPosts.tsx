import { Empty } from '@/components/Elements';
import { VerticalPost } from '.';
import { Wrapper } from './VerticalPosts.style';
import Link from 'next/link';

export const VerticalPosts = () => {
  return (
    <Wrapper>
      {posts.length ? (
        posts.map((post, i) => (
          <Link key={i} href={`/post/${post.id}`}>
            <VerticalPost
              id={post.id}
              title={post.title}
              skill={post.skill}
              region={post.region}
            />
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

const emptyPosts = [];

const posts = [
  {
    id: '1',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '2',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '3',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '4',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '5',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '6',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '7',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '8',
    title: '리액트 멘토링 해주세요',
    skill: 'react',
    region: '서울특별시 동작구 노량진동',
  },
];
