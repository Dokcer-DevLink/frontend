import { Button } from '@/components/Elements';
import { Inner } from './ChatForm.style';
import { Form, InputField } from '@/components/Form';
import { FaPaperPlane } from 'react-icons/fa';

export const ChatForm = () => {
  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <Inner>
          <InputField
            registration={register('message')}
            error={formState.errors['message']?.root}
            placeholder="메세지를 입력해주세요"
          />
          <Button startIcon={<FaPaperPlane />} width="35px" />
        </Inner>
      )}
    </Form>
  );
};
