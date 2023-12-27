import React, { useEffect } from 'react';
import { Button, Dialog } from '..';
import { useDisclosure } from '@/hooks/useDisclosure';
import {
  Buttons,
  Description,
  TextBox,
  Title,
  Wrapper,
} from './ConfirmationDialog.style';

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  confirmationButton: React.ReactElement;
  title?: string;
  description?: string;
  isDone?: boolean;
  cancelButtonText?: string;
  maxWidth?: string;
};

export const ConfirmationDialog = ({
  triggerButton,
  confirmationButton,
  title,
  description = '',
  isDone = false,
  cancelButtonText = '닫기',
  maxWidth,
}: ConfirmationDialogProps) => {
  const { close, open, isOpen } = useDisclosure();
  useEffect(() => {
    if (isDone) {
    }
  }, []);

  const trigger = React.cloneElement(triggerButton, {
    onclick: open,
  });

  return (
    <>
      {trigger}
      <Dialog isOpen={isOpen} onClose={close}>
        <Wrapper maxWidth={maxWidth}>
          <TextBox>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextBox>
          <Buttons>
            {confirmationButton}
            <Button
              onclick={close}
              justifycontent="center"
              variant="background"
            >
              {cancelButtonText}
            </Button>
          </Buttons>
        </Wrapper>
      </Dialog>
    </>
  );
};
