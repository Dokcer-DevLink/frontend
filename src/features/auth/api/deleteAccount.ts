import { axios } from '@/libraries/axios';

export const deleteAccount = () => {
  return axios.delete('/auth-service/api/users');
};
