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
import { Button } from '@/components/Elements';

type ProfileImageInputFieldProps = ImageInputFieldProps & {
  setValue: UseFormSetValue<any>;
  registration: Partial<UseFormRegisterReturn>;
  defaultValue: string | null;
};

export const ProfileImageInputField = ({
  setValue,
  defaultValue,
  registration,
  error,
}: ProfileImageInputFieldProps) => {
  const [imageUrl, setImageUrl] = useState(defaultValue);

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
      <Button
        variant="secondary"
        justifycontent="center"
        onclick={() => {
          setImageUrl(null);
        }}
      >
        기본 이미지로 변경
      </Button>
      <InputField
        display="none"
        error={error}
        type="text"
        registration={registration}
      />
    </>
  );
};
