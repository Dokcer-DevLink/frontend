import { Button, ConfirmationDialog } from '@/components/Elements';
import { useRouter } from 'next/router';

export const DeletePost = () => {
  const router = useRouter();
  const handleClickExit = () => {
    router.replace('/chat');
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
          onclick={handleClickExit}
        >
          게시물 삭제
        </Button>
      }
      description="게시물을 삭제하면 내용이 삭제되고 복구할 수 없어요. 게시물을 삭제하시겠어요?"
      cancelButtonText="취소"
    ></ConfirmationDialog>
  );
};
