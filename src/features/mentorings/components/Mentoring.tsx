import { useEffect } from 'react';
import { MentoringType } from '../type';
import {
  Contents,
  Image,
  Infomations,
  PromisedAt,
  Region,
  Status,
  Title,
  Wrapper,
} from './Mentoring.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';

export const Mentoring = ({
  menteeUuid,
  mentorUuid,
  mentoringPlace,
  mentoringUuid,
  onOffline,
  postUuid,
  startTime,
  status,
  unitTimeCount,
  targetNickname,
  targetImageUrl,
}: MentoringType) => {
  return (
    <Wrapper>
      <Contents>
        <Image
          src={targetImageUrl ? targetImageUrl : NoProfileUser.src}
          alt="상대 유저 이미지"
        />
        <Infomations>
          <Title>{targetNickname}</Title>
          <PromisedAt>{startTime.slice(0, 10)}</PromisedAt>
          {mentoringPlace ? (
            <Region>{mentoringPlace}</Region>
          ) : (
            <Region>{onOffline}</Region>
          )}
        </Infomations>
      </Contents>
      <Status>{status === 'ONGOING' ? '진행 중' : '완료'}</Status>
    </Wrapper>
  );
};
