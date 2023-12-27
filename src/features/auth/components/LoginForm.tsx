import { Form, InputField } from '@/components/Form';
import { FormInner, Wrapper } from './LoginForm.style';
import { Button } from '@/components/Elements';

export const LoginForm = () => {
  const handleSubmit = () => {};
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <FormInner>
            <InputField
              placeholder="이메일"
              type="email"
              error={formState.errors['email']?.root}
              registration={register('email')}
            />
            <InputField
              placeholder="비밀번호"
              type="password"
              error={formState.errors['password']?.root}
              registration={register('password')}
            />
            <Button justifycontent="center">이메일로 로그인</Button>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
