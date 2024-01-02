import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
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
  setValue: UseFormSetValue<any>;
  runningTime: number;
};

export const TimeSelectField = ({
  register,
  name,
  error,
  label,
  settings,
  date = new Date().toISOString().substring(0),
  setValue,
  runningTime,
}: TimeSelectFieldProps) => {
  const [time, setTime] = useState<string>('09:00');
  const [fiteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [dateSchedules, setDateSchedules] = useState([]);
  const [endTime, setEndTime] = useState<string>('');

  useEffect(() => {
    console.log(settings);
    if (!settings?.dates?.length) {
      return;
    }
    const dateIndex = settings?.dates.indexOf(date);
    console.log(dateIndex);

    if (dateIndex !== -1) {
      console.log(settings?.schedules[dateIndex]);
      setDateSchedules(settings?.schedules[dateIndex]);
    } else {
      setDateSchedules([]);
    }
  }, [date, settings?.dates, settings?.schedules]);

  useEffect(() => {
    setEndTime(getEndTime({ time, runningTime }));
  }, [time]);

  useEffect(() => {
    console.log(dateSchedules);
    setFilteredOptions(
      getFilteredOptions({
        options: options.map((a) => a),
        dateSchedules: [...dateSchedules],
        runningTime,
      }).map((option, i) => {
        return { key: option, value: option };
      })
    );
  }, [dateSchedules, runningTime]);

  useEffect(() => {
    if (fiteredOptions.length) {
      console.log(fiteredOptions);
      setTime(String(fiteredOptions[0].value));
      setValue(name, String(fiteredOptions[0].value));
    }
  }, [fiteredOptions, name, setValue]);
  return (
    <Wrapper>
      <SelectField
        error={error}
        label={label}
        value={time}
        registration={register(name, {
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
  console.log(options, time, runningTime);
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
  console.log(dateSchedules);
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
