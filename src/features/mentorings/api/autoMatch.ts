import { axios } from '@/libraries/axios';

export const autoMatch = () => {
  return axios.get('/matching-service/api/matching');
};
