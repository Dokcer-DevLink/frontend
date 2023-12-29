import { HTMLInputTypeAttribute, SelectHTMLAttributes, useEffect } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Option, Select } from './SelectField.style';
import { UseFormRegisterReturn } from 'react-hook-form';

export type Option = {
  key: React.ReactNode | string;
  value: string | number;
};

export type Event = {
  target: {
    files: any;
    value: String;
  };
};

export type SelectFieldProps = FieldWrapperPassThroughProps & {
  defaultValue?: string | number;
  options: Option[];
  registration: Partial<UseFormRegisterReturn>;
  value?: string;
};

export const SelectField = (props: SelectFieldProps) => {
  const {
    label,
    options = [],
    error,
    registration,
    value,
    defaultValue,
  } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <Select {...registration} value={value}>
        {options.map(({ key, value }, i) => {
          if (defaultValue === value) {
            return (
              <Option key={i} value={value} selected>
                {key}
              </Option>
            );
          }
          return (
            <Option key={i} value={value}>
              {key}
            </Option>
          );
        })}
      </Select>
    </FieldWrapper>
  );
};
