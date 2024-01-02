import { axios } from '@/libraries/axios';

export const getReceivedRequests = () => {
  return axios.get('/mentoring-service/api/mentoring/receive');
};
