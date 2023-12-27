import { ImageInputField, ImageInputFieldProps } from '@/components/Form';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { Image } from './ProfileImageInputField.style';
import { useState } from 'react';

export const ProfileImageInputField = ({
  registration,
  error,
}: ImageInputFieldProps) => {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <ImageInputField
      label={
        <Image
          src={imageUrl ? imageUrl : NoProfileUser.src}
          alt="user-profile-image"
        />
      }
      setImageUrl={setImageUrl}
      labelTextAlign="center"
      registration={registration}
      error={error}
    />
  );
};
