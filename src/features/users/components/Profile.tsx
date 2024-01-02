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
} from './Profile.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { useEffect, useState } from 'react';
import { EditProfile, ProfileImageInputField } from '.';
import { HiPencil } from 'react-icons/hi';
import { Form, InputField, RegionSelectField } from '@/components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions } from '@/features/auth';
import { editMyProfile, getUser, profileSlice } from '..';
import { UserType } from '../type';

type ProfileProps = {
  isMine: boolean;
  profileDetail: UserType;
};

export const Profile = ({ isMine = true, profileDetail }: ProfileProps) => {
  const profile = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = async (values: any) => {
    console.log(values);
    const village = (await getRegions(values.village)).data.regcodes[0].name;
    const stacks = values.skills.split('#');
    if (stacks.length) {
      stacks.shift();
    }
    (async () => {
      try {
        const result = await editMyProfile({
          nickname: values.nickname,
          introduction: values?.introduction,
          address: village,
          stacks,
          profileImage: values.imageUrl ? values.imageUrl : null,
          githubAddress: values.githubAddress,
        });
        dispatch(profileSlice.actions.setProfile({ ...result.data.profile }));
        setIsEditable(false);
      } catch (error) {
        console.error(error);
        setIsEditable(false);
      }
    })();
  };
  return (
    <Form onSubmit={handleSubmit} id="edit-profile">
      {({ register, formState, setValue }) => (
        <Wrapper>
          {!isEditable && isMine && (
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
            <ProfileImageInputField
              setValue={setValue}
              defaultValue={profile.imageUrl}
              registration={register('imageUrl')}
              error={formState.errors['imageUrl']}
            />
          ) : (
            <Image
              src={profile.imageUrl ? profile.imageUrl : NoProfileUser.src}
              alt="프로필이미지"
            />
          )}
          <Box>
            <Title>닉네임</Title>
            {isEditable ? (
              <InputField
                placeholder="닉네임"
                type="text"
                defaultValue={profile.nickname}
                error={formState.errors['nickname']}
                registration={register('nickname')}
              />
            ) : (
              <Content>{profileDetail.nickname}</Content>
            )}
          </Box>
          {/* <Box>
            <Title>이메일</Title>
            <Content>daga4242@gmail.com</Content>
          </Box> */}
          <Box>
            <Title>기술스택</Title>
            {isEditable ? (
              <InputField
                defaultValue={
                  profile.stacks.length
                    ? '#' + profile.stacks.join('#')
                    : undefined
                }
                placeholder="기술스택을 #으로 구분하여 입력해주세요"
                type="text"
                error={formState.errors['skills']}
                registration={register('skills')}
              />
            ) : (
              <Tags>
                {profile.stacks.length ? (
                  profile.stacks.map((skill: string, i: number) => (
                    <Tag key={i}>{skill}</Tag>
                  ))
                ) : (
                  <Content>기술스택 정보가 없습니다</Content>
                )}
              </Tags>
            )}
          </Box>
          <Box>
            <Title>지역</Title>
            {isEditable ? (
              <RegionSelectField
                register={register}
                formState={formState}
                defaultValue={profile.address}
              />
            ) : profile.address ? (
              <Tag>{profile.address}</Tag>
            ) : (
              <Content>지역 정보가 없습니다</Content>
            )}
          </Box>
          <Box>
            <Title>깃허브 주소</Title>
            {isEditable ? (
              <InputField
                defaultValue={profile.githubAddress}
                placeholder="깃허브 주소"
                type="text"
                error={formState.errors['githubAddress']}
                registration={register('githubAddress')}
              />
            ) : profile.githubAddress ? (
              <Anchor href={profile.githubAddress} target="_blank">
                {profile.githubAddress}
              </Anchor>
            ) : (
              <Content>깃허브 주소 정보가 없습니다</Content>
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
