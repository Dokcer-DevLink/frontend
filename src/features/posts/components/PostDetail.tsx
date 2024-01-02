import Link from 'next/link';
import { EditPostStatus } from '.';
import {
  ButtonWrapper,
  Contents,
  Image,
  ImageWrapper,
  Introduction,
  Nickname,
  Phrase,
  Content,
  Profile,
  Tag,
  UserImage,
  UserInfomation,
  UserRegion,
  Wrapper,
  ContentName,
  Tags,
} from './PostDetail.style';

import Logo from '@/assets/images/logo.png';
import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserType } from '@/features/users/type';
import { getUser } from '@/features/users';

type Address = {
  addressName: string;
  addressX: number;
  addressY: number;
};

export type PostDetailProps = {
  address?: Address;
  onOffline: 'ONLINE' | 'OFFLINE';
  postContent?: string;
  postImageUrl?: string;
  postStatus: 'WAITING' | 'COMPLETED';
  postTitle: string;
  postType: 'MENTOR' | 'MENTEE';
  postUuid: string;
  stacks: string[];
  unitTimeCount: number;
  userUuid: string;
};

export const PostDetail = ({
  address,
  onOffline,
  postContent,
  postImageUrl,
  postStatus,
  postTitle,
  postType,
  postUuid,
  stacks,
  unitTimeCount,
  userUuid,
}: PostDetailProps) => {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [postUser, setPostUser] = useState<UserType>();
  const myUserUuid = useSelector(({ auth }) => auth.userUuid);
  useEffect(() => {
    if (userUuid === myUserUuid) {
      setIsMine(true);
    } else {
      (async () => {
        const result = await getUser({ userUuid });
        if (result) {
          setPostUser(result.data);
        }
      })();
    }
  }, [userUuid, myUserUuid]);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={postImageUrl ? postImageUrl : Logo.src}
          alt="게시물 이미지"
        />
      </ImageWrapper>
      {!isMine && (
        <Link href={`/user/${userUuid}`}>
          <Profile>
            <UserImage src={NoProfileUser.src} />
            <UserInfomation>
              <Nickname>{postUser?.nickname}</Nickname>
              <UserRegion>{postUser?.address}</UserRegion>
            </UserInfomation>
          </Profile>
        </Link>
      )}
      <Contents>
        <Content flexDirection="row" alignItems="center">
          <Phrase>
            {postStatus === 'WAITING'
              ? '현재 멘토를 모집 중인 게시물입니다'
              : '멘토링이 완료된 게시물 입니다.'}
          </Phrase>
          <ButtonWrapper>
            {isMine && <EditPostStatus postUuid={postUuid} />}
          </ButtonWrapper>
        </Content>
        <Content>
          <Introduction>{postContent}</Introduction>
        </Content>
        <Content>
          <ContentName>기술스택</ContentName>
          {stacks?.length ? (
            <Tags>
              {stacks.map((stack, i) => (
                <Tag key={i}>{stack}</Tag>
              ))}
            </Tags>
          ) : null}
        </Content>
        <Content>
          <ContentName>진행방식</ContentName>
          <Tag>{onOffline === 'ONLINE' ? '온라인' : '오프라인'}</Tag>
        </Content>
        <Content>
          <ContentName>지역박스</ContentName>
          {address?.addressName && <Tag>{address?.addressName}</Tag>}
        </Content>
        <Content>
          <ContentName>예상 소요 시간</ContentName>
          {<Tag>{getRunnigTimeByUnitTimeCount(unitTimeCount)}</Tag>}
        </Content>
      </Contents>
    </Wrapper>
  );
};

const getRunnigTimeByUnitTimeCount = (unitTimeCount: number) => {
  console.log(unitTimeCount);
  const share = Math.floor(unitTimeCount / 2);
  const remain = unitTimeCount % 2;
  console.log(share, remain);
  let runningTime = '';
  if (share) {
    runningTime += `${share}시간`;
  }
  if (remain) {
    runningTime += ' 30분';
  }
  return runningTime;
};
