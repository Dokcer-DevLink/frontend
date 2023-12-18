import { useEffect, useState } from 'react';
import { Option, SelectField, Event } from '.';
import { addressRequest } from '@/libraries/axios';

type Regcode = {
  code: string;
  name: string;
};

export const RegionSelectField = () => {
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
            label: shiftRegcode.join(' '),
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
            label: shiftRegcode.join(' '),
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
          return { label: regcode.name, value: regcode.code };
        });
        setCities(regcodes);
      })
      .catch((error) => console.error('Error', error));
  }, []);

  useEffect(() => {
    if (cities) {
      const cityCode = cities[0].value;
      addressRequest
        .get(`/v1/regcodes?regcode_pattern=${cityCode.slice(0, 2)}*000000`)
        .then((res) => {
          const regcodes = res.data.regcodes.map((regcode: Regcode) => {
            let shiftRegcode = regcode.name.split(' ');
            shiftRegcode.shift();
            return {
              label: shiftRegcode.join(' '),
              value: regcode.code,
            };
          });
          regcodes.shift();
          setTowns(regcodes);
        })
        .catch((error) => console.error('Error', error));
    }
  }, [cities]);

  useEffect(() => {
    if (towns) {
      const townCode = towns[0].value;
      addressRequest
        .get(`/v1/regcodes?regcode_pattern=${townCode.slice(0, 4)}*`)
        .then((res) => {
          const regcodes = res.data.regcodes.map((regcode: Regcode) => {
            let shiftRegcode = regcode.name.split(' ');
            shiftRegcode.shift();
            shiftRegcode.shift();
            return {
              label: shiftRegcode.join(' '),
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
    <>
      <SelectField
        options={cities ? cities : mockCities}
        label="시/도"
        onchange={getTowns}
      />
      <SelectField
        options={towns ? towns : mockCities}
        label="시/군/구"
        onchange={getVillages}
      />
      <SelectField
        options={villages ? villages : mockCities}
        label="읍/면/동"
      />
    </>
  );
};

const mockCities = [{ label: 'label', value: 'value' }];
