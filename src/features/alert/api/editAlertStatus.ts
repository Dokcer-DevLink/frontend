import { axios } from '@/libraries/axios';

type editAlertStatusProps = {
  notificationUuid: string;
};

export const editAlertStatus = ({ notificationUuid }: editAlertStatusProps) => {
  return axios.get('/notification-service/api/notification/check', {
    params: { notificationUuid: notificationUuid },
  });
};
