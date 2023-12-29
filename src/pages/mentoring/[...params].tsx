import { Button } from '@/components/Elements';
import { Header } from '@/components/Layout';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { Inner } from '@/styles/pageStyles/mentoring/[...params].style';
import { Mentoring } from '@/features/mentorings/components/Mentoring';
import { VerticalUser } from '@/features/users';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import Link from 'next/link';
import { MentoringRecord } from '@/features/mentorings';

export default function MentoringDetail() {
  const router = useRouter();
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
        isDisplayInMobile={true}
      />
      <Inner>
        <Mentoring
          id={mentoringDetail.id}
          title={mentoringDetail.title}
          promisedAt={mentoringDetail.promisedAt}
          region={mentoringDetail.region}
          status={mentoringDetail.status}
        />
        <Link href={`/user/${mentoringDetail.user.id}`}>
          <VerticalUser
            image={mentoringDetail.user.image}
            nickname={mentoringDetail.user.nickname}
            skill={mentoringDetail.user.skill}
            region={mentoringDetail.user.region}
          />
        </Link>
        <MentoringRecord
          filename="멘토링 음성 파일명"
          record="음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 음성파일내용 "
        />
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
