import {
  UseFormRegisterReturn,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import {
  Calendar,
  Day,
  Header,
  Invisible,
  Item,
  Row,
  Wrapper,
  YearAndMonth,
} from './DatePicker.style';
import { FieldWrapperPassThroughProps } from '@/components/Form/FieldWrapper';

import moment from 'moment';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';

type DatePickerProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  onchange: (value: string) => void;
  setValue?: UseFormSetValue<any>;
};

export const DatePicker = ({
  label,
  error,
  registration,
  onchange,
  setValue,
}: DatePickerProps) => {
  const [date, setDate] = useState<moment.Moment>(() => moment());
  const [yearAndMonth, setYearAndMonth] = useState<string>();

  const updateMonth = (value: 'prev' | 'next') =>
    value === 'next'
      ? setDate(date.clone().add(31, 'day'))
      : setDate(date.clone().subtract(31, 'day'));

  const getYearAndMonth = (date: moment.Moment) => {
    const newDate = new Date(date.toString());
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    return `${year}년 ${month + 1}월`;
  };

  useEffect(() => {
    const newYearAndMonth = getYearAndMonth(date);
    setYearAndMonth(newYearAndMonth);
    onchange(date.format('YYYY-MM-DD'));
    setValue('date', date.format('YYYY-MM-DD'));
  }, [date, onchange]);

  return (
    <Wrapper>
      <Header>
        <Button
          startIcon={<FaArrowLeft />}
          width="30px"
          onclick={() => updateMonth('prev')}
        />
        <YearAndMonth>{yearAndMonth}</YearAndMonth>
        <Button
          startIcon={<FaArrowRight />}
          width="30px"
          onclick={() => updateMonth('next')}
        />
      </Header>
      <Calendar>
        <Row>
          {Days.map((day, i) => (
            <Day key={i}>{day}</Day>
          ))}
        </Row>
        {getCalendar(date, setDate).map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </Calendar>
      <Invisible>
        <InputField
          error={error}
          label={label}
          registration={registration}
          value={date.format('YYYY-MM-DD')}
        />
      </Invisible>
    </Wrapper>
  );
};

const Days = ['일', '월', '화', '수', '목', '금', '토'];

const getCalendar = (
  date: moment.Moment,
  setDate: {
    (value: SetStateAction<moment.Moment>): void;
    (arg0: moment.Moment): void;
  }
): React.ReactNode[] => {
  let selectedDate = date;
  const startWeek = selectedDate.clone().startOf('month').week();
  const endWeek =
    selectedDate.clone().endOf('month').week() === 1
      ? 53
      : selectedDate.clone().endOf('month').week();
  let isLastWeek = false;

  if (selectedDate.week() === 1 && selectedDate.month() === 11) {
    isLastWeek = true;
  }

  const rows: ReactNode[] = [];

  for (let week = startWeek; week <= endWeek; week++) {
    rows.push(
      <Row>
        {Array(7)
          .fill(0)
          .map((n, i) => {
            let current = isLastWeek
              ? moment(`${selectedDate.format('YYYYMM')}01`)
                  .clone()
                  .week(week)
                  .startOf('week')
                  .add(n + i, 'day')
              : selectedDate
                  .clone()
                  .week(week)
                  .startOf('week')
                  .add(n + i, 'day');

            let isSelectedDate =
              selectedDate.format('YYYYMMDD') === current.format('YYYYMMDD')
                ? true
                : false;

            let isSelectedMonth =
              selectedDate.format('MM') === current.format('MM') ? true : false;

            return (
              <Item
                onClick={() => setDate(current)}
                key={i}
                isSelectedDate={isSelectedDate}
                isSelectedMonth={isSelectedMonth}
              >
                {current.format('D')}
              </Item>
            );
          })}
      </Row>
    );
  }

  return rows;
};
