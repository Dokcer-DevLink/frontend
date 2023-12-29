import { Button } from '@/components/Elements';
import { Header } from '@/components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Inner, Posts } from '@/styles/pageStyles/user/[...params].style';
import { Profile, getUser } from '@/features/users';

import k8s from '@/assets/images/k8s.png';
import { UserPosts, VerticalPostProps } from '@/features/posts';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function UserProfile() {
  const router = useRouter();

  const [isMine, setIsMine] = useState(false);
  const [isMentor, setIsMentor] = useState<boolean>(true);

  const userUuid = useSelector(({ auth }) => auth.userUuid);
  const { params } = useParams();
  const postUserId = params[0];

  useEffect(() => {
    if (userUuid === postUserId) {
      setIsMine(true);
    }
  }, [userUuid, postUserId]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getUser({
          userUuid: postUserId,
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Header
        title={user.nickname}
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
        rightbuttons={
          !isMine && (
            <Button onclick={() => router.push(`/chat/${postUserId}`)}>
              채팅하기
            </Button>
          )
        }
        isDisplayInMobile={true}
      />
      <Inner>
        <Profile isMine={false} />
        <Posts>
          <UserPosts
            postsAsMentor={postsAsMentor}
            postsAsMentee={postsAsMentee}
          />
        </Posts>
      </Inner>
    </>
  );
}

const user = {
  id: '1',
  image: k8s.src,
  nickname: '김재만',
  skill: 'React',
  region: '서울특별시 동작구 노량진동',
};

const postsAsMentor: VerticalPostProps[] = [];

const postsAsMentee: VerticalPostProps[] = [
  {
    id: '1',
    image: k8s.src,
    title: '멘토 급구! ',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '2',
    image: null,
    title: '멘토 급구! ',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '3',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '4',
    image: null,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '5',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '6',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '7',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '8',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '9',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
  {
    id: '10',
    image: k8s.src,
    title: '멘토 급구! 멘토멘토',
    skill: 'React',
    region: '동작구',
  },
];
