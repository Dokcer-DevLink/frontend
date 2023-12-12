import React from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  children,
  options,
  id,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ ...options });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
