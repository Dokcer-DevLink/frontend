import { Contents, Image, Tag, Tags, Title, Wrapper } from './Post.style';

import Logo from '@/assets/images/logo.png';

export const Post = () => {
  return (
    <Wrapper>
      <Contents>
        <Image src={Logo.src} />
        <Tags>
          <Tag>React</Tag>
          <Tag>동작구</Tag>
        </Tags>
      </Contents>
      <Title>Dev Link 화이팅</Title>
    </Wrapper>
  );
};
