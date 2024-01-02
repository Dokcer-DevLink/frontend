import { Button, ConfirmationDialog } from '@/components/Elements';
import { useRouter } from 'next/router';
import { deletePost } from '../api/deletePost';

type DeletePostProps = {
  postUuid: string;
};

export const DeletePost = ({ postUuid }: DeletePostProps) => {
  const router = useRouter();
  const handleClickConfirmationButton = async () => {
    try {
      const result = await deletePost({ postUuid });
      console.log(result);
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" justifycontent="center">
          삭제하기
        </Button>
      }
      confirmationButton={
        <Button
          variant="error"
          justifycontent="center"
          onclick={handleClickConfirmationButton}
        >
          게시물 삭제
        </Button>
      }
      description="게시물을 삭제하면 내용이 삭제되고 복구할 수 없어요. 게시물을 삭제하시겠어요?"
      cancelButtonText="취소"
    ></ConfirmationDialog>
  );
};
