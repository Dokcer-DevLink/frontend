import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Textarea } from './TextareaField.style';
import { theme } from '@/styles/theme';

type TextareaFieldProps = FieldWrapperPassThroughProps & {
  placeholder?: string;
  variant?: keyof typeof theme.schemes.light;
  texttype?: keyof typeof theme.styles;
  size?: 'large' | 'medium' | 'small';
  defaultValue?: string;

  registration: Partial<UseFormRegisterReturn>;
};

export const TextareaField = (props: TextareaFieldProps) => {
  const {
    placeholder,

    variant = 'primary',
    texttype = 'body',
    size = 'large',

    label,
    error,
    registration,
    defaultValue,
  } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <Textarea
        variant={variant}
        texttype={texttype}
        size={size}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...registration}
      />
    </FieldWrapper>
  );
};
