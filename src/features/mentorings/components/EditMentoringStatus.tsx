import { Button, FormDialog, Input } from '@/components/Elements';
import { useRouter } from 'next/router';
import { editMentoringStatus } from '../api/editMentoringStatus';
import { Dispatch, SetStateAction } from 'react';
import { MentoringType } from '../type';

type EditMentoringStatusProps = {
  mentoringUuid: string;
  setCurrentMentoring: Dispatch<SetStateAction<MentoringType | undefined>>;
};

export const EditMentoringStatus = ({
  mentoringUuid,
  setCurrentMentoring,
}: EditMentoringStatusProps) => {
  const handleSubmit = async (values: any) => {
    const result = await editMentoringStatus({
      mentoringUuid,
      status: values.status,
    });
    setCurrentMentoring((prev: any) => {
      return { ...prev, status: values.status };
    });
  };
  return (
    <FormDialog
      triggerButton={
        <Button variant="surfaceVariant" justifycontent="center">
          상태변경
        </Button>
      }
      inputs={inputs}
      title="멘토링 상태 변경"
      cancelButtonText="취소"
      onSubmit={handleSubmit}
    ></FormDialog>
  );
};

const inputs: Input[] = [
  {
    type: 'select',
    name: 'status',
    options: [
      { key: '진행 중', value: 'ONGOING' },
      { key: '완료', value: 'COMPLETED' },
    ],
  },
];
