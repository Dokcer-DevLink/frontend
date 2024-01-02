import { useEffect, useState } from 'react';
import { Alert } from './Alert';
import { Title, Wrapper } from './Alerts.style';
import { getAlerts } from '..';
import { AlertProps } from '../type';
import { useSelector } from 'react-redux';
import { Empty } from '@/components/Elements';

export const Alerts = () => {
  const { userUuid } = useSelector(({ auth }) => auth);
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  useEffect(() => {
    if (!userUuid) {
      return;
    }
    (async () => {
      try {
        const result = await getAlerts();
        setAlerts(result.data.content);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <Wrapper>
      <Title>알림 목록</Title>
      {alerts?.length ? (
        alerts.map((alert, i) => (
          <Alert
            key={i}
            notificationUuid={alert.notificationUuid}
            message={alert.message}
            notifyType={alert.notifyType}
          />
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
