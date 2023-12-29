import { axios } from '@/libraries/axios';

export const logout = () => {
  return axios.delete('/auth-service/api/logout');
};
