import { Image, Nickname, Tag, Tags, Wrapper } from './User.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

export const User = () => {
  return (
    <Wrapper>
      <Image src={NoProfileUser.src} alt="User Profile Image" />
      <Nickname>김재만</Nickname>
      <Tags>
        <Tag>React</Tag>
        <Tag>동작구</Tag>
      </Tags>
    </Wrapper>
  );
};
