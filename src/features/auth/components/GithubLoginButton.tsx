import { Button } from '@/components/Elements';
import { Logo } from './GithubLoginButton.style';

import GithubLogo from '@/assets/images/github.svg';

export const GithubLoginButton = () => {
  return (
    <Button
      startIcon={<Logo src={GithubLogo.src} />}
      variant="background"
      isoutlined={true}
      justifycontent="center"
    >
      Github로 로그인하기
    </Button>
  );
};
