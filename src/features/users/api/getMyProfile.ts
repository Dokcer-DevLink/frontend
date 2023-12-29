import { axios } from '@/libraries/axios';

export const getMyProfile = () => {
  return axios.get('/profile-service/api/myprofile');
};
