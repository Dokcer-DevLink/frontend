import { Button, ConfirmationDialog } from '@/components/Elements';

export const Logout = () => {
  return (
    <ConfirmationDialog
      triggerButton={<Button justifycontent="center">로그아웃</Button>}
      confirmationButton={<Button justifycontent="center">로그아웃</Button>}
      title="로그아웃"
      description="정말 로그아웃할까요?"
    ></ConfirmationDialog>
  );
};
