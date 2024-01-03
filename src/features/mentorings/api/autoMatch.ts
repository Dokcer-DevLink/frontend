import { axios } from '@/libraries/axios';

type autoMatchProps = {
  place: string;
  type: 'MENTOR' | 'MENTEE';
  unitTimeCount: number;
  startTime: string;
};

export const autoMatch = ({
  place,
  type,
  unitTimeCount,
  startTime,
}: autoMatchProps) => {
  return axios.post('/matching-service/api/matching', {
    place,
    type,
    unitTimeCount,
    startTime,
  });
};
