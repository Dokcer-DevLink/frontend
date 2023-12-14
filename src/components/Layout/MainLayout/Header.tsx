import Link from 'next/link';
import { Buttons, Logo, Wrapper } from './Header.style';
import { Button } from '@/components/Elements';

import LogoSquare from '@/assets/images/logo.png';

type HeaderProps = {
  leftbuttons?: React.ReactNode;
  rightbuttons?: React.ReactNode;
};

export const Header = ({ leftbuttons, rightbuttons }: HeaderProps) => {
  return (
    <Wrapper>
      <Buttons>{leftbuttons}</Buttons>
      <Logo src={LogoSquare.src} width="50px" />
      <Buttons>{rightbuttons}</Buttons>
    </Wrapper>
  );
};
