import { Button, Menu } from '@/components/Elements';
import { useRouter } from 'next/router';
import { FaEllipsisV } from 'react-icons/fa';
import { ExitChat, ReportChat } from '.';
import { Buttons } from './ChatHamburgerMenu.style';

export const ChatHamburgerMenu = () => {
  const router = useRouter();
  const handleClickExit = () => {
    router.replace('/chat');
  };
  return (
    <Menu
      triggerButton={
        <Button
          textstyle="title"
          size="large"
          variant="background"
          padding="2px"
          startIcon={<FaEllipsisV />}
        />
      }
      buttons={
        <Buttons>
          <ReportChat key={0} />
          <ExitChat key={1} />
        </Buttons>
      }
    />
  );
};
