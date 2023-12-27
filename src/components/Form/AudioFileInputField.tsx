import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from './AudioFileInputField.style';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

export type AudioFileInputFieldProps = FieldWrapperPassThroughProps & {
  label?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
};

export const AudioFileInputField = ({
  label,
  error,
  registration,
}: AudioFileInputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input type="file" accept="audio/*" {...registration} />
    </FieldWrapper>
  );
};
