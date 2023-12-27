import { UseFormRegisterReturn } from 'react-hook-form';
import {
  Datalist,
  Input,
  Option,
  OptionValue,
  OptionWrapper,
} from './RangeInputField.style';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type RangeInputFieldProps = FieldWrapperPassThroughProps & {
  name?: string;
  options?: string[];
  registration: Partial<UseFormRegisterReturn>;
};

export const RangeInputField = ({
  name = 'list',
  options = [],
  registration,
  error,
}: RangeInputFieldProps) => {
  return (
    <FieldWrapper error={error}>
      <Input
        type="range"
        min="0"
        max={options.length - 1}
        list={name}
        {...registration}
      />
      <Datalist>
        {options.map((option, i) => (
          <OptionWrapper key={i}>
            <Option value={option}></Option>
            <OptionValue>{option}</OptionValue>
          </OptionWrapper>
        ))}
      </Datalist>
    </FieldWrapper>
  );
};

// const options = [0, 1, 2, 3, 4];
