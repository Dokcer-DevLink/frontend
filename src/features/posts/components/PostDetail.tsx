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

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

type PostDetailProps = {
  imageUrl?: string;
  isMine: boolean;
  userId?: string;
};

export const PostDetail = ({ imageUrl, isMine, userId }: PostDetailProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt="게시물 이미지" />
      </ImageWrapper>
      {!isMine && (
        <Link href={`/user/${userId}`}>
          <Profile>
            <UserImage src={NoProfileUser.src} />
            <UserInfomation>
              <Nickname>김재만</Nickname>
              <UserRegion>서울특별시 동작구 노량진동</UserRegion>
            </UserInfomation>
          </Profile>
        </Link>
      )}
      <Contents>
        <Content flexDirection="row" alignItems="center">
          <Phrase>현재 멘토를 모집 중인 게시물입니다</Phrase>
          <ButtonWrapper>{isMine && <EditPostStatus />}</ButtonWrapper>
        </Content>
        <Content>
          <Introduction>
            리액트 멘토 있으시면 도와주세요 리액트 멘토 있으시면 도와주세요
            리액트 멘토 있으시면 도와주세요 리액트 멘토 있으시면 도와주세요
            리액트 멘토 있으시면 도와주세요 리액트 멘토 있으시면 도와주세요
            리액트 멘토 있으시면 도와주세요
          </Introduction>
        </Content>
        <Content>
          <ContentName>기술스택</ContentName>
          <Tags>
            <Tag>React.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Typescript</Tag>
          </Tags>
        </Content>
        <Content>
          <ContentName>진행방식</ContentName>
          <Tag>온라인</Tag>
        </Content>
        <Content>
          <ContentName>지역박스</ContentName>
          <Tag>서울특별시 동작구 노량진동</Tag>
        </Content>
        <Content>
          <ContentName>예상 소요 시간</ContentName>
          <Tag>1시간</Tag>
        </Content>
      </Contents>
    </Wrapper>
  );
};
