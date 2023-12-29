import { axios } from '@/libraries/axios';

export const getAlerts = () => {
  return axios.get('/notification-service/api/notification/my');
};
