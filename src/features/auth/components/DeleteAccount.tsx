import { Button, ConfirmationDialog } from '@/components/Elements';

export const DeleteAccount = () => {
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="surfaceVariant" justifycontent="center">
          회원탈퇴
        </Button>
      }
      confirmationButton={
        <Button justifycontent="center" variant="error">
          회원탈퇴
        </Button>
      }
      title="회원탈퇴"
      description="정말 탈퇴하시나요?"
    ></ConfirmationDialog>
  );
};
