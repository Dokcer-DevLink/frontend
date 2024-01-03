import { Button } from '@/components/Elements';
import { Header } from '@/components/Layout';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { Inner } from '@/styles/pageStyles/mentoring/[...params].style';
import { Mentoring } from '@/features/mentorings/components/Mentoring';
import { getUser } from '@/features/users';

import Link from 'next/link';
import { EditMentoringStatus, MentoringRecord } from '@/features/mentorings';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getMentoring } from '@/features/mentorings/api/getMentoring';
import { useSelector } from 'react-redux';
import { UserType } from '@/features/users/type';
import { MentoringType } from '@/features/mentorings/type';

export default function MentoringDetail() {
  const router = useRouter();
  const { params } = useParams();
  const [mentoringUuid, setMentoringUuid] = useState<string>();
  const [currentMentoring, setCurrentMentoring] = useState<MentoringType>();

  const { userUuid } = useSelector(({ auth }) => auth);
  const [opponent, setOpponent] = useState<UserType>();

  useEffect(() => {
    if (typeof params?.length !== 'number') {
      return;
    }
    setMentoringUuid(params[0]);
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
    if (userUuid && currentMentoring) {
      (async () => {
        const result = await getUser({ userUuid });
        if (result) {
          setOpponent(result.data);
        }
      })();
    }
  }, [currentMentoring, userUuid]);

  useEffect(() => {
    if (router.query?.status && currentMentoring) {
      setCurrentMentoring((prev: any) => {
        return { ...prev, status: router.query?.status };
      });
    }
  }, [currentMentoring, router]);

  return (
    <>
      {mentoringUuid && currentMentoring && opponent ? (
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
            rightbuttons={
              <EditMentoringStatus
                mentoringUuid={mentoringUuid}
                setCurrentMentoring={setCurrentMentoring}
              />
            }
            isDisplayInMobile={true}
          />
          <Inner>
            <Link href={`/user/${currentMentoring.mentorUuid}`}>
              <Mentoring
                menteeUuid={currentMentoring.menteeUuid}
                mentorUuid={currentMentoring.mentorUuid}
                mentoringPlace={currentMentoring.mentoringPlace}
                mentoringUuid={currentMentoring.mentoringUuid}
                onOffline={currentMentoring.onOffline}
                postUuid={currentMentoring.postUuid}
                startTime={currentMentoring.startTime}
                status={currentMentoring.status}
                unitTimeCount={currentMentoring.unitTimeCount}
                recordContent={currentMentoring.recordContent}
                targetImageUrl={opponent.profileImageUrl}
                targetNickname={opponent.nickname}
              />
            </Link>
            <MentoringRecord
              filename=""
              record={currentMentoring.recordContent}
              mentoringUuid={mentoringUuid}
              setCurrentMentoring={setCurrentMentoring}
            />
          </Inner>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
