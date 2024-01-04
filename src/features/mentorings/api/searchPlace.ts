import { axios } from '@/libraries/axios';

type searchPlaceType = {
  place: string;
};

export const searchPlace = ({ place }: searchPlaceType) => {
  return axios.get('/matching-service/api/matching/search', {
    params: { place },
  });
};
