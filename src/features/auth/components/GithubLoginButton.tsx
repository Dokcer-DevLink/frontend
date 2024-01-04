import { Button } from '@/components/Elements';
import { Logo } from './GithubLoginButton.style';

import GithubLogo from '@/assets/images/github.svg';
import { loginWithGithub } from '../api/login';
import { useRouter } from 'next/router';

export const GithubLoginButton = () => {
  const router = useRouter();
  const handleClickGithubLogin = async () => {
    const result = await loginWithGithub();
    router.push(
      `https://github.com/login/oauth/authorize?client_id=${result.data?.clientId}`
    );
    console.log(result);
  };

  return (
    <Button
      startIcon={<Logo src={GithubLogo.src} />}
      variant="background"
      isoutlined={true}
      justifycontent="center"
      onclick={handleClickGithubLogin}
    >
      Github로 로그인하기
    </Button>
  );
};
