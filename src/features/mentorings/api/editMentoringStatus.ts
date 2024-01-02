import { axios } from '@/libraries/axios';

export type editMentoringStatusProps = {
  mentoringUuid: string;
  status: 'ONGOING' | 'COMPLETED';
};

export const editMentoringStatus = ({
  mentoringUuid,
  status,
}: editMentoringStatusProps) => {
  return axios.post('/mentoring-service/api/mentoring/status', {
    mentoringUuid,
    status,
  });
};
