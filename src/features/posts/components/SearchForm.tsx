import { Form, InputField } from '@/components/Form';
import { FormInner } from './SearchForm.style';
import { Button } from '@/components/Elements';

import { MdOutlineSearch } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';

type SearchFormProps = {
  setKeyword: Dispatch<SetStateAction<string>>;
};

export const SearchForm = ({ setKeyword }: SearchFormProps) => {
  const handleSubmit = (values: { keyword: string }) => {
    setKeyword(values.keyword);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <FormInner>
          <InputField
            placeholder="검색어를 입력해주세요"
            registration={register('keyword')}
            error={formState.errors['keyword']?.root}
          />
          <Button
            startIcon={<MdOutlineSearch size="20" />}
            width="30px"
            padding="0"
            justifycontent="center"
            type="submit"
          />
        </FormInner>
      )}
    </Form>
  );
};
