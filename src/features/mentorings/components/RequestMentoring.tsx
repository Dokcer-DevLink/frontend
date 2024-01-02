import { Button, FormDialog, Input } from '@/components/Elements';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { sendMentoringRequest } from '..';
import { getSchedules } from '@/features/users';

type RequestMentoringProps = {
  postUuid: string;
  postType: 'MENTOR' | 'MENTEE';
  targetUuid: string;
  address?: string;
  onOffline: 'ONLINE' | 'OFFLINE';
  runningTime: number;
};

export const RequestMentoring = ({
  postUuid,
  targetUuid,
  postType,
  address,
  onOffline,
  runningTime,
}: RequestMentoringProps) => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getSchedules({ userUuid: targetUuid });
        if (result) {
          setSchedules(result.data.schedules);
        }
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [targetUuid]);
  const inputs: Input[] = [
    {
      type: 'datePicker',
      name: 'date',
    },
    {
      type: 'timeSelect',
      name: 'time',
      settings: {
        schedules: schedules,
        // [
        //   [
        //     { startTime: '09:00', runningTime: 1 },
        //     { startTime: '13:00', runningTime: 1 },
        //   ],
        //   [{ startTime: '11:00', runningTime: 2 }],
        //   [{ startTime: '09:00', runningTime: 5 }],
        //   [{ startTime: '11:00', runningTime: 3 }],
        // ],
        dates: ['2023-12-26', '2023-12-27', '2023-12-28', '2023-12-29'],
      },
    },
  ];

  const handleSubmit = async (values: any) => {
    const { date, time } = values;
    const offset = new Date().getTimezoneOffset() * 60000;
    const startTimeMilliseconds =
      new Date(`${date}T${time}`).getMilliseconds() - offset;
    const startTime = new Date(startTimeMilliseconds).toISOString();

    const result = await sendMentoringRequest({
      postUuid,
      targetUuid,
      targetType: postType,
      startTime,
      unitTimeCount: runningTime,
      mentoringPlace: address,
      onOffline,
    });
    console.log(result);
  };

  return (
    <FormDialog
      runningTime={runningTime}
      triggerButton={
        <Button variant="background" justifycontent="center">
          멘토링 신청
        </Button>
      }
      inputs={inputs}
      title="멘토링 신청"
      description="김재만님께 멘토링을 신청합니다"
      submitButtonText="신청하기"
      cancelButtonText="취소"
      onSubmit={handleSubmit}
    />
  );
};
