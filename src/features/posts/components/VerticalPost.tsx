import { PostType } from '../type';
import {
  Contents,
  Image,
  RightElements,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './VerticalPost.style';

import Logo from '@/assets/images/logo.png';

export type VerticalPostProps = PostType & {
  rightElement?: React.ReactNode;
};

export const VerticalPost = ({
  postUuid,
  postImageUrl = null,
  postTitle,
  stacks,
  address,
  rightElement = null,
}: VerticalPostProps) => {
  return (
    <Wrapper>
      <Image src={postImageUrl ? postImageUrl : Logo.src} alt="게시물 이미지" />
      <Contents>
        <Title>{postTitle}</Title>
        <Tags>
          {stacks?.length ? (
            <>
              {stacks?.map((stack, i) => (
                <Tag key={i}>{stack}</Tag>
              ))}
            </>
          ) : null}
          {address && <Tag>{address}</Tag>}
        </Tags>
      </Contents>
      <RightElements>{rightElement}</RightElements>
    </Wrapper>
  );
};
