import React from 'react';
import { Buttons, Trigger, Wrapper } from './Menu.style';
import { useDisclosure } from '@/hooks/useDisclosure';

type MenuProps = {
  triggerButton: React.ReactElement;
  buttons: React.ReactElement;
};

export const Menu = ({ triggerButton, buttons }: MenuProps) => {
  const { isOpen, toggle } = useDisclosure(false);
  return (
    <Wrapper>
      <Trigger onClick={toggle}>{triggerButton}</Trigger>
      <Buttons isShowing={isOpen}>{buttons}</Buttons>
    </Wrapper>
  );
};
