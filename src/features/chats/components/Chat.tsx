import moment from 'moment';
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
  messageNotRead: number;
  recentDate?: string;
  recentMessage?: string;
  roomUuid: string;
  targetUuid: string;
  targetNickname?: string;
  imageUrl?: string;
};

export const Chat = ({
  messageNotRead,
  recentDate,
  recentMessage,
  roomUuid,
  targetUuid,
  targetNickname,
  imageUrl,
}: ChatProps) => {
  return (
    <Wrapper>
      <UserImage src={imageUrl ? imageUrl : NoProfileUser.src} />
      <Contents>
        <UserNickname>{targetNickname}</UserNickname>
        <RecentChatedAt>
          {recentDate ? moment(recentDate).format('YYYY-MM-DD') : null}
        </RecentChatedAt>
        <RecentMessage>{recentMessage}</RecentMessage>
      </Contents>
      {messageNotRead !== 0 && (
        <UnconfirmedMessageNumber>
          {`${messageNotRead}`}
        </UnconfirmedMessageNumber>
      )}
    </Wrapper>
  );
};
