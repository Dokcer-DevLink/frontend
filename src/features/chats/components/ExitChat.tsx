import { Button, ConfirmationDialog } from '@/components/Elements';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const ExitChat = () => {
  const router = useRouter();
  const { stompClient, roomUuid } = useSelector(
    ({ chat }) => chat.currentChatRoom
  );

  const handleClickExit = () => {
    stompClient.current.unsubscribe(roomUuid);
    // stompClient.current.disconnect(roomUuid);
    router.replace('/chat');
  };
  return (
    <ConfirmationDialog
      maxWidth="330px"
      triggerButton={
        <Button variant="background" justifycontent="center">
          채팅방 나가기
        </Button>
      }
      confirmationButton={
        <Button
          variant="error"
          justifycontent="center"
          onclick={handleClickExit}
        >
          채팅방 나가기
        </Button>
      }
      description="채팅방을 나가면 채팅 목록 및 대화 내용이 삭제되고 복구할 수 없어요. 채팅방에서 나가시겠어요?"
      cancelButtonText="취소"
    ></ConfirmationDialog>
  );
};
