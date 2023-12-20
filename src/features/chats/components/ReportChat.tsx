import { Button, ConfirmationDialog } from '@/components/Elements';
import { useRouter } from 'next/router';

export const ReportChat = () => {
  const router = useRouter();
  const handleClickExit = () => {
    router.replace('/chat');
  };
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" justifycontent="center">
          차단하기
        </Button>
      }
      confirmationButton={
        <Button variant="error" justifycontent="center">
          차단하기
        </Button>
      }
      description="차단시 서로의 게시글을 확인하거나 채팅을 할 수 없어요. 차단하실래요?"
      cancelButtonText="취소"
    ></ConfirmationDialog>
  );
};
