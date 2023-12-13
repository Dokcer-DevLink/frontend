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
};

export const Button = ({
  variant = 'primary',
  children,
  type = 'label',
  size = 'medium',
  startIcon,
  flexdirection = 'row',
  fontweight,
}: ButtonProps) => {
  return (
    <Wrapper
      variant={variant}
      type={type}
      size={size}
      flexdirection={flexdirection}
      fontweight={fontweight}
    >
      {startIcon}
      {children}
    </Wrapper>
  );
};
