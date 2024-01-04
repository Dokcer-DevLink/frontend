import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Buttons,
  Description,
  FormInner,
  Title,
  Wrapper,
} from './AutoMatchForm.style';
import {
  DatePicker,
  Form,
  RangeInputField,
  TimeSelectField,
} from '@/components/Form';
import { Button, Empty, Tooltip } from '@/components/Elements';
import { SearchPlace, autoMatch } from '..';
import { getNowKr } from '@/utils/getNowKr';
import { useRouter } from 'next/router';

export type Place = {
  place: string;
  address: string;
};

export const AutoMatchForm = () => {
  const [role, setRole] = useState<'MENTOR' | 'MENTEE'>('MENTOR');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place>({
    place: '',
    address: '',
  });
  const [date, setDate] = useState<string>(getNowKr());
  const [unitTimeCount, setUnitTimeCount] = useState<number>(1);

  const router = useRouter();

  const handleSubmit = (values: any) => {
    if (!values?.time || !values?.unitTimeCount || !selectedPlace.place) {
      return;
    }
    (async () => {
      try {
        const startTime = new Date(`${date}T${values.time}`).toISOString();
        const result = await autoMatch({
          address: selectedPlace.address,
          type: role,
          unitTimeCount: values.unitTimeCount,
          startTime,
        });
        router.push(`/post/${result.data.postUuid}`);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    console.log(unitTimeCount);
  }, [unitTimeCount]);
  return (
    <Wrapper>
      <Title>자동으로 멘토 / 멘티 찾기</Title>
      <Description>
        지역/기술/스케쥴 등 입력하신 정보를 바탕으로 적합한 멘토링 상대방을
        매칭합니다. 매칭에 다소 시간이 걸릴 수 있습니다.
      </Description>
      <SearchPlace setPlaces={setPlaces} />
      <Form onSubmit={handleSubmit}>
        {({ register, formState, setValue }) => (
          <FormInner>
            <Description>상대방의 역할을 선택해주세요</Description>
            <Buttons>
              <Button
                onclick={() => setRole('MENTOR')}
                isoutlined={role === 'MENTEE'}
                variant="secondary"
                type="button"
                width="160px"
                justifycontent="center"
              >
                멘토
              </Button>
              <Button
                onclick={() => setRole('MENTEE')}
                isoutlined={role === 'MENTOR'}
                variant="secondary"
                type="button"
                width="160px"
                justifycontent="center"
              >
                멘티
              </Button>
            </Buttons>
            <Description>매칭 장소를 선택해주세요</Description>
            <>
              {places?.length ? (
                <Buttons>
                  {places.map((place, i) => (
                    <Tooltip key={i} tips={place.address}>
                      <Button
                        width="150px"
                        onclick={() => setSelectedPlace(place)}
                        isoutlined={place.address !== selectedPlace.address}
                      >
                        {place.place}
                      </Button>
                    </Tooltip>
                  ))}
                </Buttons>
              ) : (
                <Empty />
              )}
            </>
            <Description>원하는 멘토링 날짜와 시간을 선택해주세요</Description>
            <DatePicker
              setValue={setValue}
              error={formState.errors['date']?.root}
              registration={register('date')}
              onchange={setDate}
            />
            <TimeSelectField
              runningTime={unitTimeCount}
              settings={[]}
              register={register}
              name="time"
              error={formState.errors['time']?.root}
              date={date}
              setValue={setValue}
            />
            <Description>멘토링에 필요한 시간을 선택해주세요</Description>
            <RangeInputField
              defaultValue={unitTimeCount}
              registration={register('unitTimeCount', {
                onChange: (event) => setUnitTimeCount(event.target.value),
              })}
              error={formState.errors['unitTimeCount']?.root}
              options={[
                '',
                '30분',
                '1시간',
                '1시간 30분',
                '2시간',
                '2시간 30분',
                '3시간',
              ]}
            />
            <Button type="submit" justifycontent="center">
              자동매칭하기
            </Button>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
