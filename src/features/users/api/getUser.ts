import { axios } from '@/libraries/axios';

type getUser = {
  userUuid: string;
};

export const getUser = ({ userUuid }: getUser) => {
  return axios.get('/profile-service/api/profile', {
    params: { userUuid },
  });
};
