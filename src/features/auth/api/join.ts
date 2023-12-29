import { axios } from '@/libraries/axios';

type joinProps = {
  nickname: string;
  email: string;
  password: string;
};

export const join = ({ nickname, email, password }: joinProps) => {
  return axios.post('/auth-service/api/join', {
    nickname,
    email,
    password,
  });
};
