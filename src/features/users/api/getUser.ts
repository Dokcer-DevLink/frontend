import { axios } from '@/libraries/axios';

type getUser = {
  userUuid: string;
};

export const getUser = ({ userUuid }: getUser) => {
  if (!userUuid) {
    return;
  }

  return axios.get('/profile-service/api/profile', {
    params: { userUuid },
  });
};
