import {
  Contents,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './HorizontalPost.style';

import Logo from '@/assets/images/logo.png';

export type HorizontalPostProps = {};

export const HorizontalPost = () => {
  return (
    <Wrapper>
      <Contents>
        <Image src={Logo.src} alt="게시물 이미지" />
        <Tags>
          <Tag>React</Tag>
          <Tag>동작구</Tag>
        </Tags>
      </Contents>
      <Title>Dev Link 화이팅</Title>
    </Wrapper>
  );
};
