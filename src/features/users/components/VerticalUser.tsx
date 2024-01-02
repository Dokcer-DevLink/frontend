import { UserType } from '../type';
import {
  Image,
  Infomations,
  Nickname,
  RightElements,
  Tag,
  Wrapper,
} from './VerticalUser.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

type VerticalUserProps = UserType & {
  rightElement?: React.ReactNode;
};

export const VerticalUser = ({
  profileImageUrl,
  nickname,
  stacks,
  address,
  rightElement,
}: VerticalUserProps) => {
  return (
    <Wrapper>
      <Image
        src={profileImageUrl ? profileImageUrl : NoProfileUser.src}
        alt="유저이미지"
      />
      <Infomations>
        <Nickname>{nickname}</Nickname>
        {stacks?.length
          ? stacks.map((stack, i) => <Tag key={i}>{stack}</Tag>)
          : null}
        {address && <Tag>{address}</Tag>}
      </Infomations>
      <RightElements>{rightElement}</RightElements>
    </Wrapper>
  );
};
