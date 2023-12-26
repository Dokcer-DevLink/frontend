import { Post } from '../type';
import {
  Contents,
  Image,
  RightElements,
  Tag,
  Title,
  Wrapper,
} from './VerticalPost.style';

import Logo from '@/assets/images/logo.png';

export type VerticalPostProps = Post & {
  rightElement?: React.ReactNode;
};

export const VerticalPost = ({
  id,
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
