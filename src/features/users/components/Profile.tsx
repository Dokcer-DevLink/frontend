import { Button } from '@/components/Elements';
import {
  Anchor,
  Box,
  ButtonWrapper,
  Buttons,
  Content,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './Protile.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { useState } from 'react';
import { EditProfile } from '.';
import { HiPencil } from 'react-icons/hi';
import {
  Form,
  ImageInputField,
  InputField,
  RegionSelectField,
} from '@/components/Form';

export const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = (values: any) => {
    setIsEditable(false);
  };

  return (
    <Form onSubmit={handleSubmit} id="edit-profile">
      {({ register, formState }) => (
        <Wrapper>
          {!isEditable && (
            <ButtonWrapper>
              <Button
                textstyle="title"
                size="large"
                variant="background"
                padding="2px"
                startIcon={<HiPencil />}
                onclick={() => setIsEditable(true)}
              />
            </ButtonWrapper>
          )}
          {isEditable ? (
            <ImageInputField
              error={formState.errors['userImage']}
              registration={register('userImage')}
            />
          ) : (
            <Image src={NoProfileUser.src} alt="프로필이미지" />
          )}
          <Box>
            <Title>닉네임</Title>
            {isEditable ? (
              <InputField
                placeholder="닉네임"
                type="text"
                error={formState.errors['nickname']}
                registration={register('nickname')}
              />
            ) : (
              <Content>김재만</Content>
            )}
          </Box>
          <Box>
            <Title>이메일</Title>
            <Content>daga4242@gmail.com</Content>
          </Box>
          <Box>
            <Title>기술스택</Title>
            {isEditable ? (
              <InputField
                placeholder="기술스택"
                type="text"
                error={formState.errors['skill']}
                registration={register('skill')}
              />
            ) : (
              <Tags>
                <Tag>React.js</Tag>
                <Tag>TypeScript</Tag>
              </Tags>
            )}
          </Box>
          <Box>
            <Title>지역</Title>
            {isEditable ? (
              <Tags>
                <RegionSelectField />
              </Tags>
            ) : (
              <Tags>
                <Tag>서울시</Tag>
                <Tag>동작구</Tag>
                <Tag>노량진동</Tag>
              </Tags>
            )}
          </Box>
          <Box>
            <Title>깃허브 주소</Title>
            {isEditable ? (
              <InputField
                placeholder="깃허브 주소"
                type="text"
                error={formState.errors['githubAddress']}
                registration={register('githubAddress')}
              />
            ) : (
              <Anchor href="https://github.com/mannMae" target="_blank">
                https://github.com/mannMae
              </Anchor>
            )}
          </Box>
          {isEditable && (
            <Buttons>
              <Button
                justifycontent="center"
                variant="secondary"
                onclick={() => setIsEditable(false)}
              >
                취소하기
              </Button>
              <EditProfile />
            </Buttons>
          )}
        </Wrapper>
      )}
    </Form>
  );
};
