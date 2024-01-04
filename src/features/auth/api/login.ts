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

export const loginWithGithub = () => {
  return axios.get('/auth-service/api/login/github');
};

type loginWithGithubCode = {
  code: string;
};

export const loginWithGithubCode = ({ code }: loginWithGithubCode) => {
  return axios.get('/auth-service/auth/github/callback', {
    params: { code },
  });
};
