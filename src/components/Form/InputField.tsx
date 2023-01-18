import {
  Control,
  Controller,
  RegisterOptions,
  Path,
  FieldValues,
  FieldError,
} from "react-hook-form";

type InputFieldProps<TFormValues extends FieldValues = FieldValues> = {
  name: Path<TFormValues>;
  id: string;
  type?: "text" | "email" | "password";
  control: Control<TFormValues>;
  rules?: Omit<
    RegisterOptions<TFormValues>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  error?: FieldError | undefined;
  errorMessage?: string;
  autoComplete?: string;
  trailingButton?: React.ReactNode;
};

export const InputField = <TFormValues extends Record<string, unknown>>({
  name,
  id,
  control,
  type = "text",
  rules,
  error,
  errorMessage = `Invalid ${name}`,
  autoComplete,
  trailingButton,
}: InputFieldProps<TFormValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, name }, fieldState }) => (
        <div className="relative my-7 w-full">
          <label
            htmlFor={id}
            className="text-sm text-primary-black font-normal capitalize"
          >
            {name}
          </label>
          {error && (
            <span className="absolute right-0 text-xs text-error mt-1">
              {errorMessage}
            </span>
          )}
          <input
            value={value as string | number | readonly string[] | undefined}
            onChange={onChange}
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            className={`block w-full appearance-none border border-gray rounded-md text-sm mt-3 py-4 px-5
              ${
                fieldState.error
                  ? "border-error text-error ring-error focus:border-error focus:text-error focus:ring-error"
                  : !fieldState.invalid
                  ? "border-complete ring-complete"
                  : ""
              }`}
          />
          {trailingButton && trailingButton}
        </div>
      )}
    />
  );
};
