import { axios } from '@/libraries/axios';

type getMentoringProps = {
  mentoringUuid: string;
};

export const getMentoring = ({ mentoringUuid }: getMentoringProps) => {
  return axios.get('/mentoring-service/api/mentoring', {
    params: { mentoringUuid },
  });
};
