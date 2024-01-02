import { Button } from '@/components/Elements';
import { Inner } from './ChatForm.style';
import { Form, InputField } from '@/components/Form';
import { FaPaperPlane } from 'react-icons/fa';
import { sendMessage } from '..';
import { useSelector } from 'react-redux';
import { BaseSyntheticEvent } from 'react';

export const ChatForm = () => {
  const { roomUuid, targetUuid } = useSelector(
    ({ chat }) => chat.currentChatRoom
  );

  const handleSubmit = async (
    values: { message: string },
    event: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    try {
      const result = await sendMessage({
        roomUuid,
        senderUuid: targetUuid,
        message: values.message,
      });
      console.log(result);

      if (event) {
        event.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <Inner>
          <InputField
            registration={register('message')}
            error={formState.errors['message']?.root}
            placeholder="메세지를 입력해주세요"
          />
          <Button startIcon={<FaPaperPlane />} width="35px" type="submit" />
        </Inner>
      )}
    </Form>
  );
};
