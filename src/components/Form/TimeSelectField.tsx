import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { Option, SelectField } from '.';
import { FieldWrapperPassThroughProps } from './FieldWrapper';
import { EndTime, Tilde, Wrapper } from './TimeSelectField.style';
import { useEffect, useState } from 'react';

type TimeSelectFieldProps = FieldWrapperPassThroughProps & {
  register: UseFormRegister<any>;
  name: string;
  date?: string;
  settings: any;
  schedules?: any[];
};

export const TimeSelectField = ({
  register,
  name,
  error,
  label,
  settings,
  date = new Date().toISOString().substring(0),
}: TimeSelectFieldProps) => {
  const [time, setTime] = useState<string>('09:00');
  const [fiteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [runningTime, setRunningTime] = useState<number>(2);
  const [dateSchedules, setDateSchedules] = useState([]);
  const [endTime, setEndTime] = useState<string>('');

  useEffect(() => {
    const dateIndex = settings?.dates.indexOf(date);

    if (dateIndex !== -1) {
      setDateSchedules(settings?.schedules[dateIndex]);
    } else {
      setDateSchedules([]);
    }
  }, [date]);

  useEffect(() => {
    setEndTime(getEndTime({ time, runningTime }));
  }, [time]);

  useEffect(() => {
    setFilteredOptions(
      getFilteredOptions({
        options: options.map((a) => a),
        dateSchedules: dateSchedules.map((a) => a),
        runningTime,
      }).map((option, i) => {
        return { key: option, value: option };
      })
    );
  }, [dateSchedules]);

  useEffect(() => {
    if (fiteredOptions.length) {
      setTime(String(fiteredOptions[0].value));
    }
  }, [fiteredOptions]);
  return (
    <Wrapper>
      <SelectField
        error={error}
        label={label}
        value={time}
        registration={register('name', {
          onChange: (event) => {
            setTime(event.target.value);
          },
        })}
        options={fiteredOptions}
      />
      <Tilde>~</Tilde>
      <EndTime>{endTime}</EndTime>
    </Wrapper>
  );
};

type getEndTimeProps = {
  time: string;
  runningTime: number;
};

const getEndTime = ({ time, runningTime }: getEndTimeProps) => {
  return options[options.indexOf(time) + runningTime];
};

type getFilteredOptionsProps = {
  options: string[];
  dateSchedules: any[];
  runningTime: number;
};

const getFilteredOptions = ({
  options,
  dateSchedules,
  runningTime,
}: getFilteredOptionsProps) => {
  options.map((option) => {
    return { key: option, value: option };
  });
  while (dateSchedules.length) {
    const scheduleStartTime = dateSchedules[0].startTime;
    const scheduleRunningTime = dateSchedules[0].runningTime;
    const scheduleStartTimeIndex = options.indexOf(scheduleStartTime);
    const schedule = options.filter(
      (option, i) =>
        i + (runningTime - 1) >= scheduleStartTimeIndex &&
        i <= scheduleStartTimeIndex + scheduleRunningTime - 1
    );
    options.splice(options.indexOf(schedule[0]), schedule.length);
    dateSchedules.shift();
  }

  return options;
};

const options = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
];

// const options = [
//     { value: 0, key: '09:00' },
//     { value: 1, key: '09:30' },
//     { value: 2, key: '10:00' },
//     { value: 3, key: '10:30' },
//     { value: 4, key: '11:00' },
//     { value: 5, key: '11:30' },
//     { value: 6, key: '12:00' },
//     { value: 7, key: '12:30' },
//     { value: 8, key: '13:00' },
//     { value: 9, key: '13:30' },
//     { value: 10, key: '14:00' },
//     { value: 11, key: '14:30' },
//     { value: 12, key: '15:00' },
//     { value: 13, key: '15:30' },
//     { value: 14, key: '16:00' },
//     { value: 15, key: '16:30' },
//     { value: 16, key: '17:00' },
//     { value: 17, key: '17:30' },
//     { value: 18, key: '18:00' },
//     { value: 19, key: '18:30' },
//     { value: 20, key: '19:00' },
//     { value: 21, key: '19:30' },
//     { value: 22, key: '20:00' },
//     { value: 23, key: '20:30' },
//     { value: 24, key: '21:00' },
//     { value: 25, key: '21:30' },
//     { value: 26, key: '22:00' },
//     { value: 27, key: '22:30' },
//     { value: 28, key: '23:00' },
//     { value: 29, key: '23:30' },
//     { value: 30, key: '00:00' },
//     { value: 31, key: '00:30' },
//     { value: 32, key: '01:00' },
//     { value: 33, key: '01:30' },
//     { value: 34, key: '02:00' },
//     { value: 35, key: '02:30' },
//     { value: 36, key: '03:00' },
//     { value: 37, key: '03:30' },
//     { value: 38, key: '04:00' },
//     { value: 39, key: '04:30' },
//     { value: 40, key: '05:00' },
//     { value: 41, key: '05:30' },
//     { value: 42, key: '06:00' },
//     { value: 43, key: '06:30' },
//     { value: 44, key: '07:00' },
//     { value: 45, key: '07:30' },
//     { value: 46, key: '08:00' },
//     { value: 47, key: '08:30' },
//   ];
