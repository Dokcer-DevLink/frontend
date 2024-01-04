import { Empty } from '@/components/Elements';
import { VerticalUser } from '.';
import { Wrapper } from './VerticalUsers.style';

import k8s from '@/assets/images/k8s.png';
import Link from 'next/link';
import { UserType } from '../type';

type VerticalUsersProps = {
  users: UserType[];
  observer?: React.ReactNode;
};

export const VerticalUsers = ({ users, observer }: VerticalUsersProps) => {
  return (
    <Wrapper>
      {users?.length ? (
        <>
          {users.map((user, i) => (
            <Link href={`/user/${user.userUuid}`} key={i}>
              <VerticalUser
                profileImageUrl={user.profileImageUrl}
                nickname={user.nickname}
                stacks={user.stacks}
                address={user.address}
                userUuid={user.userUuid}
                githubAddress={user.githubAddress}
              />
            </Link>
          ))}
          {observer}
        </>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

const emptyUsers = [];

// const users = [
//   {
//     id: '1',
//     image: k8s.src,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '2',
//     image: null,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '3',
//     image: k8s.src,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '4',
//     image: null,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '5',
//     image: k8s.src,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '6',
//     image: null,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '7',
//     image: k8s.src,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '8',
//     image: null,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '9',
//     image: k8s.src,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
//   {
//     id: '10',
//     image: null,
//     nickname: '김재만',
//     skill: 'React',
//     region: '서울특별시 동작구 노량진동',
//   },
// ];
