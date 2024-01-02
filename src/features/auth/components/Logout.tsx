import { Button, ConfirmationDialog } from '@/components/Elements';
import { logout } from '../api/logout';
import { useDispatch } from 'react-redux';
import { storage } from '@/utils/storage';
import { useRouter } from 'next/router';
import { authSlice } from '..';
import { profileSlice } from '@/features/users';
import { chatSlice } from '@/features/chats';

export const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClickConfirmationButton = async () => {
    try {
      const result = await logout();
      dispatch(authSlice.actions.clearAuth(null));
      dispatch(profileSlice.actions.clearProfile(null));
      dispatch(chatSlice.actions.clearChatRooms(null));
      dispatch(chatSlice.actions.clearCurrentChatRoom(null));
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
      triggerButton={<Button justifycontent="center">로그아웃</Button>}
      confirmationButton={
        <Button justifycontent="center" onclick={handleClickConfirmationButton}>
          로그아웃
        </Button>
      }
      title="로그아웃"
      description="정말 로그아웃할까요?"
    ></ConfirmationDialog>
  );
};
