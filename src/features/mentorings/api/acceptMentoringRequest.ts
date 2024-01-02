import { axios } from '@/libraries/axios';

type acceptMentoringRequestProps = {
  applyUuid: string;
};

export const acceptMentoringRequest = ({
  applyUuid,
}: acceptMentoringRequestProps) => {
  return axios.get('/mentoring-service/api/mentoring/accept', {
    params: { applyUuid },
  });
};
