import * as React from "react";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from "react-hook-form";

type FormProps<TFormValues extends FieldValues> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

export const Form = <TFormValues extends FieldValues = FieldValues>({
  onSubmit,
  children,
  className,
  options,
  id,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...options,
  });
  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit((values) => {
        onSubmit(values);
        methods.reset();
      })}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
