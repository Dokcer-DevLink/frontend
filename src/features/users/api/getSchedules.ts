import { axios } from '@/libraries/axios';

type getSchedulesProps = {
  userUuid: string;
};

export const getSchedules = ({ userUuid }: getSchedulesProps) => {
  if (!userUuid) {
    console.log('No userUuid');
    return;
  }
  return axios.get('/profile-service/api/profile/schedule', {
    params: {
      userUuid,
    },
  });
};
