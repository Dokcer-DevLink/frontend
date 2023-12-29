import { axios } from '@/libraries/axios';

type loginWithEmailAndPasswordProps = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = ({
  email,
  password,
}: loginWithEmailAndPasswordProps) => {
  return axios.post('/auth-service/api/login', {
    email,
    password,
  });
};
