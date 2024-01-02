import { axios } from '@/libraries/axios';

type rejectMentoringRequestProps = {
  applyUuid: string;
};

export const rejectMentoringRequest = ({
  applyUuid,
}: rejectMentoringRequestProps) => {
  return axios.get('/mentoring-service/api/mentoring/reject', {
    params: { applyUuid },
  });
};
