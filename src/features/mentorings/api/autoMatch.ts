import { axios } from '@/libraries/axios';

export const autoMatch = () => {
  return axios.get('/matcing-service/api/matching');
};
