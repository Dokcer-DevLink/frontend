import { Button, ConfirmationDialog } from '@/components/Elements';

type RecieveMentoringProps = {
  triggerButton: React.ReactElement;
  id: string;
};

export const RecieveMentoring = ({
  triggerButton,
  id,
}: RecieveMentoringProps) => {
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" padding="0" flexdirection="column">
          {triggerButton}
        </Button>
      }
      confirmationButton={
        <>
          <Button justifycontent="center" variant="background">
            수락하기
          </Button>
          <Button justifycontent="center" variant="background">
            거절하기
          </Button>
        </>
      }
      title="멘토링 수락"
      description="멘토링을 수락할까요?"
    ></ConfirmationDialog>
  );
};
