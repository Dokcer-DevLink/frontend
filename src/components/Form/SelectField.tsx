import { HTMLInputTypeAttribute, SelectHTMLAttributes, useEffect } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Option, Select } from './SelectField.style';
import { UseFormRegisterReturn } from 'react-hook-form';

export type Option = {
  key: React.ReactNode | string;
  value: string | number;
};

export type Event = { target: { value: String } };

export type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  registration: Partial<UseFormRegisterReturn>;
  value?: string;
};

export const SelectField = (props: SelectFieldProps) => {
  const { label, options = [], error, registration, value } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <Select {...registration} value={value}>
        {options.map(({ key, value }, i) => (
          <Option key={i} value={value}>
            {key}
          </Option>
        ))}
      </Select>
    </FieldWrapper>
  );
};
