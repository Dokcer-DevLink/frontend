import React from 'react';
import { Menu as UIMenu } from '@headlessui/react';
import { Button, Items, Wrapper } from './Menu.style';

type MenuProps = {
  triggerButton: React.ReactElement;
  buttons: React.ReactElement;
};

export const Menu = ({ triggerButton, buttons }: MenuProps) => {
  return (
    <UIMenu>
      <Wrapper>
        <Button>{triggerButton}</Button>
        <Items>{buttons}</Items>
      </Wrapper>
    </UIMenu>
  );
};
