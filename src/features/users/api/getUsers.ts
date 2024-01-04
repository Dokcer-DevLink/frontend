import { axios } from '@/libraries/axios';

type getUsersProps = {
  profileType: 'MENTOR' | 'MENTEE';
  keyword?: string;
  page: number;
};

export const getUsers = ({ profileType, keyword, page }: getUsersProps) => {
  return axios.get('/profile-service/api/profile/list', {
    params: {
      profileType,
      keyword,
      page,
    },
  });
};
