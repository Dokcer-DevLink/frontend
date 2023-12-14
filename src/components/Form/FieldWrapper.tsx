import { FieldError } from 'react-hook-form';
import { ErrorMessage, Label, Wrapper } from './FieldWrapper.style';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children } = props;
  return (
    <Wrapper>
      <Label>
        {label}
        {children}
      </Label>
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};
