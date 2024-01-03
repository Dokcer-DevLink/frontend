import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from './AudioFileInputField.style';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { ChangeEvent } from 'react';

export type AudioFileInputFieldProps = FieldWrapperPassThroughProps & {
  label?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
  setAudioUrl?: (props: string) => void;
};

export const AudioFileInputField = ({
  label,
  error,
  registration,
  setAudioUrl,
}: AudioFileInputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    if (!event?.target?.files) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onloadend = (progressEvent) => {
      if (!progressEvent?.target?.result) {
        return;
      }

      if (typeof progressEvent.target.result === 'object') {
        return;
      }
      console.log(progressEvent.target.result);
      if (setAudioUrl) {
        setAudioUrl(progressEvent.target.result);
      }
    };
  };
  return (
    <FieldWrapper label={label} error={error}>
      <Input type="file" accept="audio/*" onChange={handleChange} />
    </FieldWrapper>
  );
};
