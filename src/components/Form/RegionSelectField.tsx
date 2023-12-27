import { useEffect, useState } from 'react';
import { Option, SelectField, Event, SelectFieldProps } from '.';
import { addressRequest } from '@/libraries/axios';
import { Wrapper } from './RegionSelectField.style';
import { FormState, UseFormRegister } from 'react-hook-form';

type Regcode = {
  code: string;
  name: string;
};

type RegionSelectFieldProps = {
  register: UseFormRegister<any>;
  formState: FormState<any>;
};

export const RegionSelectField = ({
  register,
  formState,
}: RegionSelectFieldProps) => {
  const [cities, setCities] = useState<Option[]>();
  const [towns, setTowns] = useState<Option[]>();
  const [villages, setVillages] = useState<Option[]>();

  const getTowns = (event: Event) => {
    const cityCode = event.target.value;
    addressRequest
      .get(`/v1/regcodes?regcode_pattern=${cityCode.slice(0, 2)}*000000`)
      .then((res) => {
        console.log(res.data.regcodes);

        const regcodes = res.data.regcodes.map((regcode: Regcode) => {
          let shiftRegcode = regcode.name.split(' ');
          shiftRegcode.shift();
          return {
            key: shiftRegcode.join(' '),
            value: regcode.code,
          };
        });
        regcodes.shift();
        setTowns(regcodes);
      })
      .catch((error) => console.error('Error', error));
  };

  const getVillages = (event: Event) => {
    if (!event) {
      return;
    }

    const townCode = event.target.value;
    addressRequest
      .get(`/v1/regcodes?regcode_pattern=${townCode.slice(0, 4)}*`)
      .then((res) => {
        const regcodes = res.data.regcodes.map((regcode: Regcode) => {
          let shiftRegcode = regcode.name.split(' ');
          shiftRegcode.shift();
          shiftRegcode.shift();
          return {
            key: shiftRegcode.join(' '),
            value: regcode.code,
          };
        });
        regcodes.shift();
        setVillages(regcodes);
      })
      .catch((error) => console.error('Error', error));
  };

  useEffect(() => {
    addressRequest
      .get('/v1/regcodes?regcode_pattern=*00000000')
      .then((res) => {
        const regcodes = res.data.regcodes.map((regcode: Regcode) => {
          return { key: regcode.name, value: regcode.code };
        });
        setCities(regcodes);
      })
      .catch((error) => console.error('Error', error));
  }, []);

  useEffect(() => {
    if (cities) {
      const cityCode = cities[0].value;
      addressRequest
        .get(
          `/v1/regcodes?regcode_pattern=${
            typeof cityCode === 'string' && cityCode.slice(0, 2)
          }*000000`
        )
        .then((res) => {
          const regcodes = res.data.regcodes.map((regcode: Regcode) => {
            let shiftRegcode = regcode.name.split(' ');
            shiftRegcode.shift();
            return {
              key: shiftRegcode.join(' '),
              value: regcode.code,
            };
          });
          regcodes.shift();
          setTowns(regcodes);
        })
        .catch((error) => console.error('Error', error));
    }
    console.log(cities);
  }, [cities]);

  useEffect(() => {
    if (towns) {
      const townCode = towns[0].value;
      addressRequest
        .get(
          `/v1/regcodes?regcode_pattern=${
            typeof townCode === 'string' && townCode.slice(0, 4)
          }*`
        )
        .then((res) => {
          const regcodes = res.data.regcodes.map((regcode: Regcode) => {
            let shiftRegcode = regcode.name.split(' ');
            shiftRegcode.shift();
            shiftRegcode.shift();
            return {
              key: shiftRegcode.join(' '),
              value: regcode.code,
            };
          });
          regcodes.shift();
          setVillages(regcodes);
        })
        .catch((error) => console.error('Error', error));
    }
  }, [towns]);

  return (
    <Wrapper>
      <SelectField
        options={cities ? cities : mockCities}
        label="시/도"
        error={formState.errors['city']?.root}
        registration={register('city', {
          onChange: (event) => getTowns(event),
        })}
      />
      <SelectField
        options={towns ? towns : mockCities}
        label="시/군/구"
        error={formState.errors['town']?.root}
        registration={register('town', {
          onChange: (event) => getVillages(event),
        })}
      />
      <SelectField
        options={villages ? villages : mockCities}
        label="읍/면/동"
        error={formState.errors['village']?.root}
        registration={register('village')}
      />
    </Wrapper>
  );
};

const mockCities = [{ key: 'key', value: 'value' }];
