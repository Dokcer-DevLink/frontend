import {
  ImageInputField,
  ImageInputFieldProps,
  InputField,
} from '@/components/Form';

import {
  AddImage,
  Image,
  InputWrapper,
  NoImage,
  Wrapper,
} from './PostImageInputField.style';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Elements';
import { FaCamera } from 'react-icons/fa';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';

type PostImageInputFieldProps = ImageInputFieldProps & {
  setValue: UseFormSetValue<any>;
  registration: Partial<UseFormRegisterReturn>;
  defaultValue?: string | null;
};

export const PostImageInputField = ({
  defaultValue,
  setValue,
  registration,
  error,
}: PostImageInputFieldProps) => {
  console.log(defaultValue);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (defaultValue) {
      setImageUrl(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    setValue('imageUrl', imageUrl);
  }, [imageUrl, setValue]);

  const handleClickClear = () => {
    setValue('imageUrl', null);
    setImageUrl('');
  };

  return (
    <>
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
            error={error}
          />
        </InputWrapper>
        {imageUrl ? (
          <>
            <Image src={imageUrl} alt="이미지 미리보기" />
            <Button
              width="120px"
              justifycontent="center"
              variant="secondary"
              onclick={handleClickClear}
            >
              이미지 초기화
            </Button>
          </>
        ) : (
          <NoImage>등록된 이미지가 없습니다</NoImage>
        )}
      </Wrapper>
      <InputField
        display="none"
        error={error}
        type="text"
        registration={registration}
      />
    </>
  );
};
