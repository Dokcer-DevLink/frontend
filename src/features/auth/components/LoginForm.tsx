import { Form, InputField } from '@/components/Form';
import { FormInner, Wrapper } from './LoginForm.style';
import { Button } from '@/components/Elements';
import { loginWithEmailAndPassword } from '../api/login';
import { useDispatch } from 'react-redux';
import { authSlice } from '..';
import { storage } from '@/utils/storage';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values: { email: string; password: string }) => {
    const result = await loginWithEmailAndPassword(values);
    dispatch(
      authSlice.actions.setAuth({
        ...result.data,
      })
    );
    storage.setValue('accessToken', result.data.accessToken);
    storage.setValue('refreshToken', result.data.refreshToken);
    storage.setValue('userUuid', result.data.userUuid);
  };

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
            <Button justifycontent="center" type="submit">
              이메일로 로그인
            </Button>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
