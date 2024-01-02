import { Button, FormDialog, Input } from '@/components/Elements';
import { editPostStatus } from '..';
import { useRouter } from 'next/router';

type EditPostStatusProps = {
  postUuid: string;
};

export const EditPostStatus = ({ postUuid }: EditPostStatusProps) => {
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    const result = await editPostStatus({
      postUuid,
      postStatus: values.status,
    });
    console.log(router);
    router.replace(`/post/${postUuid}?postStatus=${values.status}`);
  };
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
      onSubmit={handleSubmit}
    ></FormDialog>
  );
};

const inputs: Input[] = [
  {
    type: 'select',
    name: 'status',
    options: [
      { key: '모집 중', value: 'WAITING' },
      { key: '완료', value: 'COMPLETED' },
    ],
  },
];
