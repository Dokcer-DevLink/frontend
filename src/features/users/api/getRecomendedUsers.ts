import { axios } from '@/libraries/axios';

type getRecomendedUsersProps = {
  profileType: string;
};

export const getRecomendedUsers = ({
  profileType,
}: getRecomendedUsersProps) => {
  return axios.get(`/profile-service/api/profile/recommend`, {
    params: { profileType },
  });
};
