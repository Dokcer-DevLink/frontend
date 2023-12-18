import { HTMLInputTypeAttribute, SelectHTMLAttributes } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Option, Select } from './SelectField.style';

export type Option = {
  label: React.ReactNode;
  value: string;
};

export type Event = { target: { value: String } };

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  onchange?: (event: Event) => void;
};

export const SelectField = (props: SelectFieldProps) => {
  const { label, options = [], error, onchange } = props;
  const handleChange = (event: Event) => {
    if (!onchange) {
      return;
    }
    onchange(event);
  };
  return (
    <FieldWrapper label={label} error={error}>
      <Select onChange={handleChange}>
        {options.map(({ label, value }, i) => (
          <Option key={i} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </FieldWrapper>
  );
};
