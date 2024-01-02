export type AlertProps = {
  notificationUuid: string;
  message: string;
  notifyType: 'MENTORING_APPLY' | 'MENTORING_ACCEPT' | 'MENTORING_REJECT';
};
