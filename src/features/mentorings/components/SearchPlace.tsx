import { Form, InputField } from '@/components/Form';
import { FormInner } from './SearchPlace.style';
import { Button } from '@/components/Elements';
import { MdOutlineSearch } from 'react-icons/md';
import { Place, searchPlace } from '..';
import { Dispatch, SetStateAction } from 'react';

type SearchPlaceProps = {
  setPlaces: Dispatch<SetStateAction<Place[]>>;
};

export const SearchPlace = ({ setPlaces }: SearchPlaceProps) => {
  const handleSubmit = async (values: any) => {
    const result = await searchPlace({ place: values.place });
    setPlaces(result.data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <FormInner>
            <InputField
              placeholder="장소의 키워드를 입력해주세요"
              error={formState.errors['place']?.root}
              registration={register('place')}
            />
            <Button
              padding="0"
              width="40px"
              justifycontent="center"
              startIcon={<MdOutlineSearch size="18" />}
              type="submit"
            />
          </FormInner>
        )}
      </Form>
    </>
  );
};
