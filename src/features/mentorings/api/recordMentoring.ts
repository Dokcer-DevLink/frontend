import { axios } from '@/libraries/axios';

type recordMentoringProps = {
  mentoringUuid: string;
  content: string;
};

export const recordMentoring = ({
  mentoringUuid,
  content,
}: recordMentoringProps) => {
  return axios.post('/mentoring-service/api/mentoring/record', {
    mentoringUuid,
    content,
  });
};
