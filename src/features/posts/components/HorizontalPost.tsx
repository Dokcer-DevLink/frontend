import { PostType } from '../type';
import {
  Contents,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './HorizontalPost.style';

import Logo from '@/assets/images/logo.png';

export const HorizontalPost = ({
  postUuid,
  postImageUrl,
  address,
  postTitle,
  stacks,
  postType,
}: PostType) => {
  return (
    <Wrapper>
      <Contents>
        <Image
          src={postImageUrl ? postImageUrl : Logo.src}
          alt="게시물 이미지"
        />
        <Tags>
          {stacks?.map((stack, i) => (
            <Tag key={i}>{stack}</Tag>
          ))}
        </Tags>
      </Contents>
      <Title>{postTitle}</Title>
    </Wrapper>
  );
};
