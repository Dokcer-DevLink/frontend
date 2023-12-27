import { Button, ConfirmationDialog } from '@/components/Elements';

type CancelMentoringRequestProps = {
  triggerButton: React.ReactElement;
  id: string;
};

export const CancelMentoringRequest = ({
  triggerButton,
  id,
}: CancelMentoringRequestProps) => {
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" padding="0" flexdirection="column">
          {triggerButton}
        </Button>
      }
      confirmationButton={
        <>
          <Button justifycontent="center" variant="primary">
            취소하기
          </Button>
        </>
      }
      title="멘토링 취소"
      description="멘토링을 요청을 취소할까요?"
    ></ConfirmationDialog>
  );
};
