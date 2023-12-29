import { axios } from '@/libraries/axios';

export const getSendedRequests = () => {
  return axios.get('/mentoring-service/api/mentoring/send');
};
