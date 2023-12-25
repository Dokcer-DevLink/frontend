import { Button, FormDialog, Input } from '@/components/Elements';

export const EditPostStatus = () => {
  return (
    <FormDialog
      triggerButton={
        <Button variant="surfaceVariant" justifycontent="center">
          상태변경
        </Button>
      }
      inputs={inputs}
      title="게시물 상태 변경"
      cancelButtonText="취소"
    ></FormDialog>
  );
};

const inputs: Input[] = [
  {
    type: 'select',
    name: 'status',
    options: [
      { label: '모집 중', value: 'onSearching' },
      { label: '완료', value: 'finished' },
    ],
  },
];
