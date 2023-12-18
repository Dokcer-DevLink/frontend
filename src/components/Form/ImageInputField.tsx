import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Image, Input } from './ImageInputField.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { ChangeEvent, useState } from 'react';

type ImageInputFieldProps = FieldWrapperPassThroughProps & {
  defaultUrl?: string;
  registration: Partial<UseFormRegisterReturn>;
};

type Event = { target: { files: Blob[] } };

export const ImageInputField = ({
  registration,
  defaultUrl,
  error,
}: ImageInputFieldProps) => {
  const [url, setUrl] = useState(defaultUrl);
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
      setUrl(progressEvent.target.result);
    };
  };
  return (
    <FieldWrapper
      label={
        url ? (
          <Image src={url} alt="user-profile-image" />
        ) : (
          <Image src={NoProfileUser.src} alt="none-profile-image" />
        )
      }
      error={error}
    >
      <Input
        type="file"
        accept="image/*"
        {...registration}
        onChange={handleChange}
      />
    </FieldWrapper>
  );
};
