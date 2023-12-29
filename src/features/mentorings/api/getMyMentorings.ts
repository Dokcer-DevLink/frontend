import { axios } from '@/libraries/axios';

type getMyMentoringsProps = {
  mentoringType: string;
};

export const getMyMentorings = ({ mentoringType }: getMyMentoringsProps) => {
  return axios.get('/mentoring-service/api/mentoring/my', {
    params: {
      mentoringType,
    },
  });
};
