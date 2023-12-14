import { theme } from '@/styles/theme';
import { Wrapper } from './Button.style';

type ButtonProps = {
  variant?: keyof typeof theme.schemes.light;
  type?: keyof typeof theme.styles;
  size?: 'large' | 'medium' | 'small';
  children?: React.ReactNode;
  startIcon?: React.ReactElement;
  flexdirection?: 'column' | 'row';
  fontweight?: Number;
  isoutlined?: Boolean;
  justifycontent?: 'start' | 'center' | 'space-between' | 'space-around';
  border?: string;
};

export const Button = ({
  children,
  variant = 'primary',
  type = 'label',
  size = 'medium',
  startIcon,
  flexdirection = 'row',
  fontweight,
  isoutlined = false,
  justifycontent = 'start',
  border,
}: ButtonProps) => {
  return (
    <Wrapper
      variant={variant}
      type={type}
      size={size}
      flexdirection={flexdirection}
      fontweight={fontweight}
      isoutlined={isoutlined}
      justifycontent={justifycontent}
      border={border}
    >
      {startIcon}
      {children}
    </Wrapper>
  );
};
