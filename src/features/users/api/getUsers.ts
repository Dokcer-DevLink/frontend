import { axios } from '@/libraries/axios';

type getUsersProps = {
  profileType: 'MENTOR' | 'MENTEE';
  keyword?: string;
};

export const getUsers = ({ profileType, keyword }: getUsersProps) => {
  return axios.get('/profile-service/api/profile/list', {
    params: {
      profileType,
      keyword,
    },
  });
};
