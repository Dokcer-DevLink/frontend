import { Form, InputField } from '@/components/Form';
import { FormInner } from './SearchForm.style';
import { Button } from '@/components/Elements';

import { MdOutlineSearch } from 'react-icons/md';

export const SearchForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
