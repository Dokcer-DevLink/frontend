import { Button, ConfirmationDialog } from '@/components/Elements';
import { MutableRefObject } from 'react';

export const EditProfile = () => {
  return (
    <ConfirmationDialog
      triggerButton={<Button justifycontent="center">수정하기</Button>}
      confirmationButton={
        <Button justifycontent="center" type="submit" form="edit-profile">
          수정하기
        </Button>
      }
      title="프로필 수정"
      description="정말 프로필 정보를 수정할까요?"
    ></ConfirmationDialog>
  );
};
