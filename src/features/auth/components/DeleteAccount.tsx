import { Button, ConfirmationDialog } from '@/components/Elements';
import { deleteAccount } from '../api/deleteAccount';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { storage } from '@/utils/storage';
import { authSlice } from '..';
import { profileSlice } from '@/features/users';

export const DeleteAccount = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClickConfirmationButton = async () => {
    try {
      const result = await deleteAccount();
      dispatch(authSlice.actions.clearAuth(null));
      dispatch(profileSlice.actions.clearProfile(null));
      storage.clearValue('accessToken');
      storage.clearValue('refreshToken');
      storage.clearValue('userUuid');
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="surfaceVariant" justifycontent="center">
          회원탈퇴
        </Button>
      }
      confirmationButton={
        <Button
          justifycontent="center"
          variant="error"
          onclick={handleClickConfirmationButton}
        >
          회원탈퇴
        </Button>
      }
      title="회원탈퇴"
      description="정말 탈퇴하시나요?"
    ></ConfirmationDialog>
  );
};
