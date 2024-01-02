import { useEffect } from 'react';
import { MentoringType } from '../type';
import {
  Contents,
  PromisedAt,
  Region,
  Status,
  Title,
  Wrapper,
} from './Mentoring.style';

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
}: MentoringType) => {
  return (
    <Wrapper>
      <Contents>
        {/* <Title>{title}</Title>
        <PromisedAt>{promisedAt}</PromisedAt>
        <Region>{region}</Region> */}
      </Contents>
      <Status>{status === 'ONGOING' ? '진행 중' : '완료'}</Status>
    </Wrapper>
  );
};
