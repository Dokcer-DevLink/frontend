import { theme } from '@/styles/theme';
import { Wrapper } from './Button.style';
import { MutableRefObject } from 'react';

type ButtonProps = {
  variant?: keyof typeof theme.schemes.light;
  textstyle?: keyof typeof theme.styles;
  size?: 'large' | 'medium' | 'small';
  borderradius?: string;
  padding?: string;
  children?: React.ReactNode;
  startIcon?: React.ReactElement;
  flexdirection?: 'column' | 'row';
  fontweight?: Number;
  isoutlined?: Boolean;
  justifycontent?: 'start' | 'center' | 'space-between' | 'space-around';
  border?: string;
  onclick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  form?: string;
};

export const Button = ({
  children,
  variant = 'primary',
  textstyle = 'label',
  size = 'medium',
  borderradius = '5px',
  padding,
  startIcon,
  flexdirection = 'row',
  fontweight,
  isoutlined = false,
  justifycontent = 'start',
  border,
  onclick,
  type = 'button',
  form,
}: ButtonProps) => {
  return (
    <Wrapper
      variant={variant}
      textstyle={textstyle}
      size={size}
      borderradius={borderradius}
      padding={padding}
      flexdirection={flexdirection}
      fontweight={fontweight}
      isoutlined={isoutlined}
      justifycontent={justifycontent}
      border={border}
      onClick={onclick}
      type={type}
      form={form}
    >
      {startIcon}
      {children}
    </Wrapper>
  );
};
