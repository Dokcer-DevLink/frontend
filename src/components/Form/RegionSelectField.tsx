import { useEffect, useState } from 'react';
import { Option, SelectField, Event } from '.';
import { addressRequest } from '@/libraries/axios';
import { Wrapper } from './RegionSelectField.style';
import { FormState, UseFormRegister } from 'react-hook-form';
import { getRegions } from '@/features/auth';

type Regcode = {
  code: string;
  name: string;
};

type RegionSelectFieldProps = {
  defaultValue?: string;
  register: UseFormRegister<any>;
  formState: FormState<any>;
};

export const RegionSelectField = ({
  defaultValue,
  register,
  formState,
}: RegionSelectFieldProps) => {
  const [cities, setCities] = useState<Option[]>();
  const [towns, setTowns] = useState<Option[]>();
  const [villages, setVillages] = useState<Option[]>();

  const [defaultCity, setDefaultCity] = useState();
  const [defaultTown, setDefaultTown] = useState();
  const [defaultVillage, setDefaultVillage] = useState();

  const getTowns = (cityCode: string) => {
    (async () => {
      const regcodes = (
        await getRegions(
          `${typeof cityCode === 'string' && cityCode.slice(0, 2)}*000000`
        )
      ).data.regcodes;
      const newTowns = regcodes.map((regcode: Regcode) => {
        let shiftRegcode = regcode.name.split(' ');
        shiftRegcode.shift();
        return { key: shiftRegcode.join(' '), value: regcode.code };
      });
      newTowns.shift();
      setTowns(newTowns);
      if (defaultValue && !defaultTown) {
        const townFromDefaultValue = defaultValue.split(' ')[1];
        const newTown = newTowns.filter(
          (town: { key: string }) => town.key === townFromDefaultValue
        )[0];
        if (newTown?.value) {
          setDefaultTown(newTown.value);
          getVillages(newTown.value);
        }
      } else {
        getVillages(newTowns[0].value);
      }
    })();
  };

  const getVillages = (townCode: string) => {
    (async () => {
      const regcodes = (
        await getRegions(
          `${typeof townCode === 'string' && townCode.slice(0, 4)}*`
        )
      ).data.regcodes;
      const newVillages = regcodes.map((regcode: Regcode) => {
        let shiftRegcode = regcode.name.split(' ');
        shiftRegcode.shift();
        shiftRegcode.shift();
        return { key: shiftRegcode.join(' '), value: regcode.code };
      });
      newVillages.shift();
      setVillages(newVillages);
      if (defaultValue && !defaultVillage) {
        const arrayFromDefaultValue = defaultValue.split(' ');
        arrayFromDefaultValue.shift();
        arrayFromDefaultValue.shift();
        const villageFroomDefaultValue = arrayFromDefaultValue.join(' ');
        const newVillage = newVillages.filter(
          (village: { key: string }) => village.key === villageFroomDefaultValue
        )[0];
        if (newVillage?.value) {
          setDefaultVillage(newVillage.value);
        }
      }
    })();
  };

  useEffect(() => {
    (async () => {
      const regcodes = (await getRegions('*00000000')).data.regcodes;
      const newCities = regcodes.map((regcode: Regcode) => {
        return { key: regcode.name, value: regcode.code };
      });
      setCities(newCities);
      if (defaultValue && !defaultCity) {
        const cityFromDefaultValue = defaultValue.split(' ')[0];
        const newCity = newCities.filter(
          (city: { key: string }) => city.key === cityFromDefaultValue
        )[0];
        setDefaultCity(newCity.value);
        getTowns(newCity.value);
      } else {
        getTowns(newCities[0].value);
      }
    })();
  }, [defaultValue]);

  return (
    <Wrapper>
      <SelectField
        defaultValue={defaultCity}
        options={cities ? cities : mockCities}
        label="시/도"
        error={formState.errors['city']?.root}
        registration={register('city', {
          onChange: (event) => getTowns(event.target.value),
        })}
      />
      <SelectField
        defaultValue={defaultTown}
        options={towns ? towns : mockCities}
        label="시/군/구"
        error={formState.errors['town']?.root}
        registration={register('town', {
          onChange: (event) => getVillages(event.target.value),
        })}
      />
      <SelectField
        defaultValue={defaultVillage}
        options={villages ? villages : mockCities}
        label="읍/면/동"
        error={formState.errors['village']?.root}
        registration={register('village')}
      />
    </Wrapper>
  );
};

const mockCities = [{ key: '', value: '' }];
