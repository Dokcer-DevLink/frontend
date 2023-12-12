import { Wrapper } from './Button.style';

type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <Wrapper>{children}</Wrapper>;
};
