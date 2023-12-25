import { useState } from 'react';

export const useDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString()
  );
  return { selectedDate, setSelectedDate };
};
