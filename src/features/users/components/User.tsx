import { Image, Nickname, Tag, Tags, Wrapper } from './User.style';

import k8s from '@/assets/images/k8s.png';

export const User = () => {
  return (
    <Wrapper>
      <Image src={k8s.src} />
      <Nickname>김재만</Nickname>
      <Tags>
        <Tag>React</Tag>
        <Tag>동작구</Tag>
      </Tags>
    </Wrapper>
  );
};
