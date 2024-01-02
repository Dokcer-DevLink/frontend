import { UserType } from '../type';
import { Image, Nickname, Tag, Tags, Wrapper } from './HorizontalUser.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

type HorizontalUserProps = UserType & {};

export const HorizontalUser = ({
  profileImageUrl,
  nickname,
  stacks,
  address,
}: HorizontalUserProps) => {
  return (
    <Wrapper>
      <Image
        src={profileImageUrl ? profileImageUrl : NoProfileUser.src}
        alt="User Profile Image"
      />
      <Nickname>{nickname}</Nickname>
      <Tags>
        {stacks.length ? (
          <>
            {stacks.map((stack, i) => (
              <Tag key={i}>{stack}</Tag>
            ))}
          </>
        ) : (
          <></>
        )}
        {address && <Tag>{address}</Tag>}
      </Tags>
    </Wrapper>
  );
};
