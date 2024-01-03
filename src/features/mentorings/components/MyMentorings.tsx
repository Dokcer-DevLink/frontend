import { Button, Empty } from '@/components/Elements';
import { Mentoring } from './Mentoring';
import { Buttons, Mentorings, Wrapper } from './MyMentorings.style';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getMyMentorings } from '..';
import { useSelector } from 'react-redux';
import { MentoringType } from '../type';

export const MyMentorings = () => {
  const [isSelectedRoleEqualsMentor, setIsSelectedRoleEqualsMentor] =
    useState(true);
  const { userUuid } = useSelector(({ auth }) => auth);
  const [mentorings, setMentorings] = useState<MentoringType[]>([]);

  useEffect(() => {
    if (!userUuid) {
      return;
    }
    if (isSelectedRoleEqualsMentor) {
      (async () => {
        try {
          const result = await getMyMentorings({ mentoringType: 'MENTOR' });
          setMentorings(result.data);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      (async () => {
        try {
          const result = await getMyMentorings({ mentoringType: 'MENTEE' });
          setMentorings(result.data.content);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [isSelectedRoleEqualsMentor, userUuid]);

  useEffect(() => {
    console.log(mentorings);
  }, [mentorings]);

  return (
    <Wrapper>
      <Buttons>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(true)}
          justifycontent="center"
          variant="secondary"
          isoutlined={!isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          내가 한 멘토링
        </Button>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(false)}
          justifycontent="center"
          variant="secondary"
          isoutlined={isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          내가 받은 멘토링
        </Button>
      </Buttons>
      {mentorings?.length ? (
        <Mentorings>
          {mentorings.map((mentoring, i) => (
            <Link href={`/mentoring/${mentoring.mentoringUuid}`} key={i}>
              <Mentoring
                menteeUuid={mentoring.menteeUuid}
                mentorUuid={mentoring.mentorUuid}
                mentoringPlace={mentoring.mentoringPlace}
                mentoringUuid={mentoring.mentoringUuid}
                onOffline={mentoring.onOffline}
                postUuid={mentoring.postUuid}
                startTime={mentoring.startTime}
                status={mentoring.status}
                unitTimeCount={mentoring.unitTimeCount}
                recordContent={''}
                targetNickname={mentoring.targetNickname}
                targetImageUrl={mentoring.targetImageUrl}
              />
            </Link>
          ))}
        </Mentorings>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

// const mentoringsAsMentor: MentoringProps[] = [];

// const mentoringsAsMentee: MentoringProps[] = [
//   {
//     id: '1',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '2',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '3',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '4',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '5',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '6',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '7',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '8',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '9',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '10',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
//   {
//     id: '11',
//     title: '동작구 멘토 구합니다',
//     promisedAt: '2023-12-19',
//     region: '서울특별시 동작구 노량진동',
//     status: '완료',
//   },
// ];
