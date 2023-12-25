import { Button, FormDialog, Input } from '@/components/Elements';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const RequestMentoring = ({}) => {
  const inputs: Input[] = [
    {
      type: 'datePicker',
      name: 'date',
    },
    {
      type: 'timeSelect',
      name: 'time',
      settings: {
        schedules: [
          [
            { startTime: '09:00', runningTime: 1 },
            { startTime: '13:00', runningTime: 1 },
          ],
          [{ startTime: '11:00', runningTime: 2 }],
          [{ startTime: '09:00', runningTime: 5 }],
          [{ startTime: '11:00', runningTime: 3 }],
        ],
        dates: ['2023-12-26', '2023-12-27', '2023-12-28', '2023-12-29'],
      },
    },
  ];

  return (
    <FormDialog
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
    />
  );
};
