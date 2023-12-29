import { axios } from '@/libraries/axios';

type getRecomendedUsersProps = {
  profileType: string;
};

export const getRecomendedUsers = ({
  profileType,
}: getRecomendedUsersProps) => {
  // slider -> recommend
  return axios.get(`/profile-service/api/profile/slider`, {
    params: { profileType },
  });
};
