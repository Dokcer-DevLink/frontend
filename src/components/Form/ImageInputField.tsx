import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from './ImageInputField.style';

import { ChangeEvent, useState } from 'react';

export type ImageInputFieldProps = FieldWrapperPassThroughProps & {
  label?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
  setImageUrl?: (props: string) => void;
};

type Event = { target: { files: Blob[] } };

export const ImageInputField = ({
  registration,
  label,
  error,
  labelTextAlign,
  setImageUrl,
}: ImageInputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onloadend = (progressEvent) => {
      if (!progressEvent?.target?.result || !registration?.onChange) {
        return;
      }
      if (typeof progressEvent.target.result === 'object') {
        return;
      }
      if (setImageUrl) {
        setImageUrl(progressEvent.target.result);
      }
    };
  };
  return (
    <FieldWrapper label={label} error={error} labelTextAlign={labelTextAlign}>
      <Input
        type="file"
        accept="image/*"
        {...registration}
        onChange={handleChange}
      />
    </FieldWrapper>
  );
};
