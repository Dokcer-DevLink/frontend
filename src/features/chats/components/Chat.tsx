import {
  Contents,
  RecentChatedAt,
  RecentMessage,
  UnconfirmedMessageNumber,
  UserImage,
  UserNickname,
  Wrapper,
} from './Chat.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

export type ChatProps = {
  id: string;
  userImage?: string;
  nickname: string;
  recentChatedAt: string;
  recentMessage: string;
  unconfirmedMessageNumber: Number;
};

export const Chat = ({
  userImage,
  nickname,
  recentChatedAt,
  recentMessage,
  unconfirmedMessageNumber,
}: ChatProps) => {
  return (
    <Wrapper>
      <UserImage src={userImage ? userImage : NoProfileUser.src} />
      <Contents>
        <UserNickname>{nickname}</UserNickname>
        <RecentChatedAt>{recentChatedAt}</RecentChatedAt>
        <RecentMessage>{recentMessage}</RecentMessage>
      </Contents>
      {unconfirmedMessageNumber !== 0 && (
        <UnconfirmedMessageNumber>
          {`${unconfirmedMessageNumber}`}
        </UnconfirmedMessageNumber>
      )}
    </Wrapper>
  );
};
