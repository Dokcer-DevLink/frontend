import Link from 'next/link';
import { Buttons, Logo, Title, Wrapper } from './Header.style';
import { Button } from '@/components/Elements';

import LogoSquare from '@/assets/images/logo.png';

type HeaderProps = {
  leftbuttons?: React.ReactNode;
  rightbuttons?: React.ReactNode;
  title?: string;
  isDisplayInMobile?: boolean;
};

export const Header = ({
  leftbuttons,
  title,
  rightbuttons,
  isDisplayInMobile = false,
}: HeaderProps) => {
  return (
    <Wrapper isDisplayInMobile={isDisplayInMobile}>
      <Buttons margin="0 auto 0 0">{leftbuttons}</Buttons>
      {title ? (
        <Title>{title}</Title>
      ) : (
        <Logo src={LogoSquare.src} width="50px" />
      )}
      <Buttons margin="0 0 0 auto">{rightbuttons}</Buttons>
    </Wrapper>
  );
};
