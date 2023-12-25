import React, { useEffect, useState } from 'react';
import { Button, Dialog } from '..';
import { useDisclosure } from '@/hooks/useDisclosure';
import {
  Buttons,
  Description,
  TextBox,
  Title,
  Wrapper,
} from './FormDialog.style';
import { Form, Option, SelectField, DatePicker } from '@/components/Form';
import { TimeSelectField } from '@/components/Form/TimeSelectField';

export type FormDialogProps = {
  triggerButton: React.ReactElement;
  title?: string;
  description?: string;
  isDone?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  inputs: Input[];
};
export type Input = {
  name: string;
  type: 'select' | 'timeSelect' | 'text' | 'datePicker';
  options?: Option[];
  settings?: Object;
};

export const FormDialog = ({
  triggerButton,
  description,
  title,
  isDone = false,
  inputs = [],
  submitButtonText = '등록',
  cancelButtonText = '닫기',
}: FormDialogProps) => {
  const { close, open, isOpen } = useDisclosure();
  const [sharedValue, setSharedValue] = useState<string>('');
  useEffect(() => {
    if (isDone) {
    }
  }, []);

  const trigger = React.cloneElement(triggerButton, {
    onclick: open,
  });

  const handleSubmit = (values: any) => {
    console.log('Submit Dialog');
    console.log(values);
  };

  return (
    <>
      {trigger}
      <Dialog isOpen={isOpen} onClose={close}>
        <Wrapper>
          <TextBox>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextBox>
          <Form onSubmit={handleSubmit}>
            {({ register, formState }) => (
              <>
                {inputs.map((input, i) => {
                  if (input.type === 'select' && input.options) {
                    return (
                      <SelectField
                        key={input.name}
                        options={input.options}
                        registration={register(input.name)}
                        error={formState.errors[input.name]?.root}
                      />
                    );
                  }

                  if (input.type === 'timeSelect' && input.settings) {
                    return (
                      <TimeSelectField
                        key={input.name}
                        settings={input.settings}
                        register={register}
                        name={input.name}
                        error={formState.errors[input.name]?.root}
                        date={sharedValue}
                      />
                    );
                  }
                  if (input.type === 'datePicker') {
                    return (
                      <DatePicker
                        key={input.name}
                        onchange={setSharedValue}
                        registration={register(input.name)}
                        error={formState.errors[input.name]?.root}
                      />
                    );
                  }
                })}
                <Buttons>
                  <Button
                    onclick={close}
                    justifycontent="center"
                    variant="background"
                  >
                    {cancelButtonText}
                  </Button>
                  <Button
                    type="submit"
                    onclick={close}
                    justifycontent="center"
                    variant="primary"
                  >
                    {submitButtonText}
                  </Button>
                </Buttons>
              </>
            )}
          </Form>
        </Wrapper>
      </Dialog>
    </>
  );
};
