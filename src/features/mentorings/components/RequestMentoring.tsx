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

type Schedule = {
  mentoringUuid: string;
  startTime: string;
  unitTimeCount: number;
};

export const RequestMentoring = ({
  postUuid,
  targetUuid,
  postType,
  address,
  onOffline,
  runningTime,
}: RequestMentoringProps) => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [inputs, setInputs] = useState<Input[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getSchedules({ userUuid: targetUuid });
        console.log(result);
        if (result) {
          setSchedules(result.data.schedules);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [targetUuid]);

  useEffect(() => {
    if (!schedules?.length) {
      return;
    }
    console.log(schedules);
    let newSchedules = [];
    const dates = [];
    for (let schedule of schedules) {
      const date = schedule.startTime.slice(0, 10);
      const startTime = schedule.startTime.slice(11, 16);
      const dateIndex = dates.indexOf(date);
      if (dateIndex === -1) {
        newSchedules.push([{ startTime, runningTime: schedule.unitTimeCount }]);
        dates.push(date);
      } else {
        newSchedules[dateIndex].push({
          startTime,
          runningTime: schedule.unitTimeCount,
        });
      }
    }
    setInputs([
      {
        type: 'datePicker',
        name: 'date',
      },
      {
        type: 'timeSelect',
        name: 'time',
        settings: {
          schedules: newSchedules,
          dates,
        },
        // settings: schedules.map((schedule, i) => {
        //   let newSchedules = [];
        //   const dates = [];
        //   const date = schedule.startTime.slice(0, 10);
        //   const startTime = schedule.startTime.slice(11, 16);
        //   const dateIndex = dates.indexOf(date);
        //   if (dateIndex === -1) {
        //     newSchedules.push([
        //       { startTime, runningTime: schedule.runningTime },
        //     ]);
        //     dates.push(date);
        //   } else {
        //     newSchedules[dateIndex].push({
        //       startTime,
        //       runningTime: schedule.runningTime,
        //     });
        //   }
        //   console.log(date, startTime);
        //   console.log(schedule);
        //   return { schedules: newSchedules, dates };
        // }),
        // {
        //   startTime: schedule.startTime.slice(12, 16),
        //   runningTime: schedule.unitTimeCount
        // }),
        // // [
        //   [
        //     { startTime: '09:00', runningTime: 1 },
        //     { startTime: '13:00', runningTime: 1 },
        //   ],
        //   [{ startTime: '11:00', runningTime: 2 }],
        //   [{ startTime: '09:00', runningTime: 5 }],
        //   [{ startTime: '11:00', runningTime: 3 }],
        // ],
        // dates: ['2023-12-26', '2023-12-27', '2023-12-28', '2023-12-29'],
      },
    ]);
  }, [schedules]);

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleSubmit = async (values: any) => {
    const { date, time } = values;
    const offset = new Date().getTimezoneOffset() * 60000;
    const startTimeMilliseconds =
      new Date(`${date}T${time}`).getTime() - offset;
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
