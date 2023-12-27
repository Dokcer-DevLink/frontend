import { User } from '../type';
import { Image, Nickname, Tag, Tags, Wrapper } from './HorizontalUser.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

type HorizontalUserProps = User & {};

export const HorizontalUser = ({
  image,
  nickname,
  skill,
  region,
}: HorizontalUserProps) => {
  return (
    <Wrapper>
      <Image src={image ? image : NoProfileUser.src} alt="User Profile Image" />
      <Nickname>{nickname}</Nickname>
      <Tags>
        <Tag>{skill}</Tag>
        <Tag>{region}</Tag>
      </Tags>
    </Wrapper>
  );
};
