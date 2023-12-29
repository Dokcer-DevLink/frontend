import { useEffect, useState } from 'react';
import { Alert } from './Alert';
import { Wrapper } from './Alerts.style';
import { getAlerts } from '..';

export const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const result = await getAlerts();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
  }, []);
  return (
    <Wrapper>
      {alerts.map((alert, i) => (
        <Alert key={i} />
      ))}
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
    </Wrapper>
  );
};
