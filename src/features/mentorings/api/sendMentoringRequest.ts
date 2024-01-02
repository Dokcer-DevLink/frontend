import { axios } from '@/libraries/axios';

type sendMentoringRequestProps = {
  postUuid: string;
  targetUuid: string;
  targetType: 'MENTOR' | 'MENTEE';
  startTime: string;
  unitTimeCount: number;
  mentoringPlace?: string;
  onOffline: 'ONLINE' | 'OFFLINE';
};

export const sendMentoringRequest = ({
  postUuid,
  targetUuid,
  targetType,
  startTime,
  unitTimeCount,
  mentoringPlace,
  onOffline,
}: sendMentoringRequestProps) => {
  return axios.post('/mentoring-service/api/mentoring/apply', {
    postUuid,
    targetUuid,
    targetType,
    startTime,
    unitTimeCount,
    mentoringPlace,
    onOffline,
  });
};
