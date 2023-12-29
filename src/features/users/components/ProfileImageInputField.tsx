import {
  ImageInputField,
  ImageInputFieldProps,
  InputField,
} from '@/components/Form';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { Image } from './ProfileImageInputField.style';
import { use, useEffect, useState } from 'react';
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';

type ProfileImageInputFieldProps = ImageInputFieldProps & {
  setValue: UseFormSetValue<any>;
  registration: Partial<UseFormRegisterReturn>;
};

export const ProfileImageInputField = ({
  setValue,
  registration,
  error,
}: ProfileImageInputFieldProps) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setValue('imageUrl', imageUrl);
  }, [imageUrl, setValue]);

  return (
    <>
      <ImageInputField
        label={
          <Image
            src={imageUrl ? imageUrl : NoProfileUser.src}
            alt="user-profile-image"
          />
        }
        setImageUrl={setImageUrl}
        labelTextAlign="center"
        error={error}
      />
      <InputField
        display="none"
        error={error}
        type="text"
        registration={registration}
      />
    </>
  );
};
