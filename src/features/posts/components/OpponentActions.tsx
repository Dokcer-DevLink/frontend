import { Button, Menu } from '@/components/Elements';
import { FaEllipsisV } from 'react-icons/fa';
import { Buttons } from './MyActions.style';
import { DeletePost } from '.';
import { RequestMentoring } from '@/features/mentorings';

export const OpponentActions = () => {
  return (
    <Menu
      triggerButton={
        <Button startIcon={<FaEllipsisV />} variant="background" />
      }
      buttons={
        <Buttons>
          <Button justifycontent="center" variant="background">
            채팅하기
          </Button>
          <RequestMentoring />
        </Buttons>
      }
    />
  );
};
