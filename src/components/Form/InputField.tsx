import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from './InputField.style';
import { theme } from '@/styles/theme';

type InputFieldProps = FieldWrapperPassThroughProps & {
  variant?: keyof typeof theme.schemes.light;
  texttype?: keyof typeof theme.styles;
  size?: 'large' | 'medium' | 'small';
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
  autocomplete?: 'on' | 'off' | 'new-password';
  value?: string;
};

export const InputField = (props: InputFieldProps) => {
  const {
    variant = 'primary',
    texttype = 'body',
    size = 'large',

    type = 'text',
    label,
    placeholder = '입력해주세요',
    registration,
    error,
    autocomplete = 'on',
    value,
  } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        variant={variant}
        texttype={texttype}
        size={size}
        placeholder={placeholder}
        type={type}
        autoComplete={autocomplete}
        value={value}
        {...registration}
      />
    </FieldWrapper>
  );
};
