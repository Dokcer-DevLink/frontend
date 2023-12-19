import {
  Contents,
  Image,
  RightElements,
  Tag,
  Title,
  Wrapper,
} from './VerticalPost.style';

import Logo from '@/assets/images/logo.png';

export type VerticalPostProps = {
  image?: string | null;
  title: string;
  skill: string;
  region: string;
  rightElement?: React.ReactNode;
};

export const VerticalPost = ({
  image = null,
  title,
  skill,
  region,
  rightElement = null,
}: VerticalPostProps) => {
  return (
    <Wrapper>
      <Image src={image ? image : Logo.src} alt="게시물 이미지" />
      <Contents>
        <Title>{title}</Title>
        <Tag>{skill}</Tag>
        <Tag>{region}</Tag>
      </Contents>
      <RightElements>{rightElement}</RightElements>
    </Wrapper>
  );
};
