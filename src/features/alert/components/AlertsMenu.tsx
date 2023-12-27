import { Button, Menu } from '@/components/Elements';
import { Alerts } from '.';
import { HiBell } from 'react-icons/hi';
import { Buttons } from './AlertsMenu.style';

export const AlertsMenu = () => {
  return (
    <Menu
      triggerButton={
        <Button
          startIcon={<HiBell size="30" />}
          variant="background"
          padding="2px"
        />
      }
      buttons={
        <Buttons>
          <Alerts />
        </Buttons>
      }
    />
  );
};
