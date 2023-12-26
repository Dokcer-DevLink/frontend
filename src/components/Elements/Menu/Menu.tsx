import React from 'react';
import { Buttons, Overlay, Trigger, Wrapper } from './Menu.style';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Transition } from '@headlessui/react';

type MenuProps = {
  triggerButton: React.ReactElement;
  buttons: React.ReactElement;
};

export const Menu = ({ triggerButton, buttons }: MenuProps) => {
  const { isOpen, toggle, close } = useDisclosure(false);
  return (
    <>
      <Transition.Root show={isOpen}>
        <Overlay onClick={close} />
      </Transition.Root>
      <Wrapper>
        <Trigger onClick={toggle}>{triggerButton}</Trigger>
        <Buttons isShowing={isOpen}>{buttons}</Buttons>
      </Wrapper>
    </>
  );
};
