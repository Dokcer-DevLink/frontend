import { Button } from '@/components/Elements';
import { Header } from '@/components/Layout';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { Inner } from '@/styles/pageStyles/mentoring/[...params].style';
import { Mentoring } from '@/features/mentorings/components/Mentoring';
import { VerticalUser, getUser } from '@/features/users';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import Link from 'next/link';
import { EditMentoringStatus, MentoringRecord } from '@/features/mentorings';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getMentoring } from '@/features/mentorings/api/getMentoring';
import { useSelector } from 'react-redux';
import { UserType } from '@/features/users/type';

export default function MentoringDetail() {
  const router = useRouter();
  const { params } = useParams();
  const [mentoringUuid, setMentoringUuid] = useState<string>();
  const [currentMentoring, setCurrentMentoring] = useState();

  const { userUuid } = useSelector(({ auth }) => auth);
  const [opponent, setOpponent] = useState<UserType>();

  useEffect(() => {
    if (params?.length) {
      setMentoringUuid(params[0]);
    }
  }, [params]);

  useEffect(() => {
    if (!mentoringUuid) {
      return;
    }
    console.log(mentoringUuid);
    (async () => {
      try {
        const result = await getMentoring({ mentoringUuid });
        console.log(result);
        setCurrentMentoring(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [mentoringUuid]);

  useEffect(() => {
    if (userUuid) {
      (async () => {
        const result = await getUser({ userUuid });
        if (result) {
          setOpponent(result.data);
        }
      })();
    }
  }, [userUuid]);

  useEffect(() => {
    if (router.query?.status && currentMentoring) {
      setCurrentMentoring((prev: any) => {
        return { ...prev, status: router.query?.status };
      });
    }
  }, [router]);

  return (
    <>
      <Header
        title="멘토링 정보"
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
        rightbuttons={<EditMentoringStatus mentoringUuid={mentoringUuid} />}
        isDisplayInMobile={true}
      />
      <Inner>
        <Mentoring
          menteeUuid={currentMentoring?.menteeUuid}
          mentorUuid={currentMentoring?.mentorUuid}
          mentoringPlace={currentMentoring?.mentoringPlace}
          mentoringUuid={currentMentoring?.mentoringUuid}
          onOffline={currentMentoring?.onOffline}
          postUuid={currentMentoring?.postUuid}
          startTime={currentMentoring?.startTime}
          status={currentMentoring?.status}
          unitTimeCount={currentMentoring?.unitTimeCount}
        />
        <Link href={`/user/${currentMentoring?.mentorUuid}`}>
          <VerticalUser
            userUuid={opponent?.userUuid}
            profileImageUrl={opponent?.profileImageUrl}
            nickname={opponent?.nickname}
            stacks={opponent?.stacks}
            address={opponent?.address}
            githubAddress={opponent?.githubAddress}
          />
        </Link>
        <MentoringRecord filename="" record="" />
      </Inner>
    </>
  );
}

const mentoringDetail = {
  id: '1',
  title: '동작구 멘토 구합니다',
  promisedAt: '2023-12-19',
  region: '서울특별시 동작구 노량진동',
  status: '완료',
  user: {
    id: '1',
    image: NoProfileUser.src,
    nickname: '김재만',
    skill: 'React',
    region: '동작구',
  },
};
