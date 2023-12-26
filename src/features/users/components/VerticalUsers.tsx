import { Empty } from '@/components/Elements';
import { VerticalUser } from '.';
import { Wrapper } from './VerticalUsers.style';

import k8s from '@/assets/images/k8s.png';
import Link from 'next/link';

export const VerticalUsers = () => {
  return (
    <Wrapper>
      {users.length ? (
        users.map((user, i) => (
          <Link href={`/user/${user.id}`} key={i}>
            <VerticalUser
              image={user.image}
              nickname={user.nickname}
              skill={user.skill}
              region={user.region}
            />
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

const emptyUsers = [];

const users = [
  {
    id: '1',
    image: k8s.src,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '2',
    image: null,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '3',
    image: k8s.src,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '4',
    image: null,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '5',
    image: k8s.src,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '6',
    image: null,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '7',
    image: k8s.src,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '8',
    image: null,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '9',
    image: k8s.src,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
  {
    id: '10',
    image: null,
    nickname: '김재만',
    skill: 'React',
    region: '서울특별시 동작구 노량진동',
  },
];
