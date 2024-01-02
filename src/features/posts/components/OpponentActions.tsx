import { Button, Menu } from '@/components/Elements';
import { FaEllipsisV } from 'react-icons/fa';
import { Buttons } from './MyActions.style';
import { RequestMentoring } from '@/features/mentorings';
import { useRouter } from 'next/router';

type OpponentActionsProps = {
  userUuid: string;
  myUserUuid: string;
  runningTime: number;
  postType: 'MENTOR' | 'MENTEE';
  postUuid: string;
  onOffline: 'ONLINE' | 'OFFLINE';
  address?: string;
};

export const OpponentActions = ({
  userUuid,
  myUserUuid,
  runningTime,
  postType,
  postUuid,
  onOffline,
  address,
}: OpponentActionsProps) => {
  const router = useRouter();
  const handleClickChat = () => {
    if (!myUserUuid) {
      router.push('/auth/login');
    } else {
      router.push(`/chat/user/${userUuid}`);
    }
  };
  return (
    <Menu
      triggerButton={
        <Button startIcon={<FaEllipsisV />} variant="background" />
      }
      buttons={
        <Buttons>
          <Button
            justifycontent="center"
            variant="background"
            onclick={handleClickChat}
          >
            채팅하기
          </Button>
          {myUserUuid ? (
            <RequestMentoring
              postUuid={postUuid}
              postType={postType}
              targetUuid={userUuid}
              onOffline={onOffline}
              runningTime={runningTime}
              address={address}
            />
          ) : (
            <Button
              justifycontent="center"
              variant="background"
              onclick={() => router.push('/auth/login')}
            >
              멘토링 신청
            </Button>
          )}
        </Buttons>
      }
    />
  );
};
