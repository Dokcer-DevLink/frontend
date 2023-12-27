import { ImageInputField, ImageInputFieldProps } from '@/components/Form';

import {
  AddImage,
  Image,
  InputWrapper,
  NoImage,
  Wrapper,
} from './PostImageInputField.style';
import { useState } from 'react';
import { Button } from '@/components/Elements';
import { FaCamera } from 'react-icons/fa';

export const PostImageInputField = ({
  registration,
  error,
}: ImageInputFieldProps) => {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <Wrapper>
      <InputWrapper>
        <ImageInputField
          label={
            <AddImage>
              <FaCamera size="60" />
              이미지 등록
            </AddImage>
          }
          setImageUrl={setImageUrl}
          labelTextAlign="start"
          registration={registration}
          error={error}
        />
      </InputWrapper>
      {imageUrl ? (
        <Image src={imageUrl} alt="이미지 미리보기" />
      ) : (
        <NoImage>등록된 이미지가 없습니다</NoImage>
      )}
    </Wrapper>
  );
};
