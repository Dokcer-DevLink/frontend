import { User } from '../type';
import {
  Image,
  Infomations,
  Nickname,
  RightElements,
  Tag,
  Wrapper,
} from './VerticalUser.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

type VerticalUserProps = User & {
  rightElement?: React.ReactNode;
};

export const VerticalUser = ({
  image,
  nickname,
  skill,
  region,
  rightElement,
}: VerticalUserProps) => {
  return (
    <Wrapper>
      <Image src={image ? image : NoProfileUser.src} alt="유저이미지" />
      <Infomations>
        <Nickname>{nickname}</Nickname>
        <Tag>{skill}</Tag>
        <Tag>{region}</Tag>
      </Infomations>
      <RightElements>{rightElement}</RightElements>
    </Wrapper>
  );
};
