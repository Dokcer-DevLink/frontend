import { Form, InputField } from '@/components/Form';
import { FormInner } from './LoginForm.style';
import { Wrapper } from './JoinForm.style';
import { Button } from '@/components/Elements';
import { join } from '../api/join';
import { useRouter } from 'next/router';

export const JoinForm = () => {
  const router = useRouter();
  const handleSubmit = (values: {
    nickname: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    const { nickname, email, password, passwordConfirm } = values;
    if (password === passwordConfirm) {
      (async () => {
        try {
          const reuslt = await join({ nickname, email, password });
          router.push('/auth/login');
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <FormInner>
            <InputField
              placeholder="닉네임을 입력해주세요"
              type="text"
              autocomplete="off"
              error={formState.errors['nickname']?.root}
              registration={register('nickname')}
            />
            <InputField
              placeholder="이메일을 입력해주세요"
              type="email"
              autocomplete="off"
              error={formState.errors['email']?.root}
              registration={register('email')}
            />
            <InputField
              placeholder="비밀번호를 입력해주세요"
              type="password"
              autocomplete="new-password"
              error={formState.errors['password']?.root}
              registration={register('password')}
            />
            <InputField
              placeholder="비밀번호를 다시 한번 입력해주세요"
              type="password"
              autocomplete="new-password"
              error={formState.errors['passwordConfirm']?.root}
              registration={register('passwordConfirm')}
            />
            <Button justifycontent="center" type="submit">
              회원가입하기
            </Button>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
