import { useRouter } from 'next/router';
import { editAlertStatus } from '../api/editAlertStatus';
import { AlertProps } from '../type';
import { Description, Title, Wrapper } from './Alert.style';

export const Alert = ({
  notificationUuid,
  message,
  notifyType,
}: AlertProps) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const result = await editAlertStatus({
        notificationUuid: notificationUuid,
      });
      if (notifyType === 'MENTORING_APPLY') {
        return router.push('/my-page?tap=received');
      }
      if (notifyType === 'MENTORING_ACCEPT') {
        return router.push('/my-page/profile?tap=mentoring');
      }
      if (notifyType === 'MENTORING_REJECT') {
        return router.push('/my-page?tap="sended');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper onClick={() => handleClick()}>
      <Description>{message}</Description>
    </Wrapper>
  );
};
