import {
  Form,
  InputField,
  RangeInputField,
  RegionSelectField,
  TextareaField,
} from '@/components/Form';
import {
  Buttons,
  FormInner,
  InputSection,
  InputSectionTitle,
  Wrapper,
} from './PostForm.style';
import { PostImageInputField } from './PostImageInputField';
import { Button } from '@/components/Elements';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const PostForm = () => {
  const [mentoringType, setMentoringType] = useState<
    'online' | 'offline' | 'all'
  >('online');

  const router = useRouter();
  const handleSubmit = () => {
    console.log('Submit');
    router.replace('/');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} id="post-form">
        {({ register, formState }) => (
          <FormInner>
            <InputSection>
              <InputSectionTitle>멘토링 제목</InputSectionTitle>
              <InputField
                placeholder="멘토링 제목을 입력해주세요"
                registration={register('title')}
                error={formState.errors['title']?.root}
              />
            </InputSection>
            <InputSection>
              <InputSectionTitle>멘토링 소개</InputSectionTitle>
              <TextareaField
                placeholder="다른 이용자를 위해 게시물 설명을 작성해주세요"
                registration={register('description')}
                error={formState.errors['description']?.root}
              />
            </InputSection>
            <InputSection>
              <InputSectionTitle>이미지</InputSectionTitle>
              <PostImageInputField
                registration={register('userImage')}
                error={formState.errors['userImage']}
              />
            </InputSection>
            <InputSection>
              <InputSectionTitle>기술스택</InputSectionTitle>
              <InputField
                placeholder="기술스택"
                registration={register('skill')}
                error={formState.errors['skill']?.root}
              />
            </InputSection>
            <InputSection>
              <InputSectionTitle>멘토링 방식 선택</InputSectionTitle>
              <Buttons>
                <Button
                  isoutlined={mentoringType !== 'online'}
                  justifycontent="center"
                  onclick={() => setMentoringType('online')}
                  borderradius="0"
                >
                  온라인
                </Button>
                <Button
                  isoutlined={mentoringType !== 'offline'}
                  justifycontent="center"
                  onclick={() => setMentoringType('offline')}
                  borderradius="0"
                >
                  오프라인
                </Button>
              </Buttons>
              <Button
                isoutlined={mentoringType !== 'all'}
                justifycontent="center"
                onclick={() => setMentoringType('all')}
                borderradius="0"
              >
                온라인 / 오프라인 둘 다
              </Button>
            </InputSection>
            <InputSection
              display={mentoringType === 'online' ? 'none' : 'block'}
            >
              <InputSectionTitle>지역 선택</InputSectionTitle>
              <RegionSelectField register={register} formState={formState} />
            </InputSection>
            <InputSection>
              <InputSectionTitle>멘토링 시간</InputSectionTitle>
              <RangeInputField
                registration={register('runningTime')}
                error={formState.errors['runningTime']?.root}
                options={[
                  '',
                  '30분',
                  '1시간',
                  '1시간 30분',
                  '2시간',
                  '2시간 30분',
                  '3시간',
                ]}
              />
            </InputSection>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
