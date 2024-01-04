import { axios } from '@/libraries/axios';

type autoMatchProps = {
  address: string;
  type: 'MENTOR' | 'MENTEE';
  unitTimeCount: number;
  startTime: string;
};

export const autoMatch = ({
  address,
  type,
  unitTimeCount,
  startTime,
}: autoMatchProps) => {
  return axios.post('/matching-service/api/matching', {
    address,
    type,
    unitTimeCount,
    startTime,
  });
};
