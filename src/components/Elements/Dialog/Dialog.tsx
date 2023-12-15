import React, { Fragment } from 'react';
import { Dialog as UIDialog, Transition } from '@headlessui/react';
import { Overlay, Wrapper } from './Dialog.style';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialFocus?: React.MutableRefObject<null>;
};

export const Dialog = ({
  isOpen,
  onClose,
  children,
  initialFocus,
}: DialogProps) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <UIDialog
          as="div"
          static
          open={isOpen}
          onClose={onClose}
          initialFocus={initialFocus}
        >
          <Wrapper>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Overlay />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {children}
            </Transition.Child>
          </Wrapper>
        </UIDialog>
      </Transition.Root>
    </>
  );
};
