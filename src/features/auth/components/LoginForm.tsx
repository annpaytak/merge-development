import React from "react";
import { EMAIL_REGEX } from "config";
import { Form, InputField } from "components/Form";

type LoginValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const login = (values: LoginValues) => {
    console.log(values.email, values.password);
  };

  return (
    <Form<LoginValues>
      onSubmit={async (values) => {
        await login(values);
      }}
      options={{ defaultValues: { email: "", password: "" } }}
    >
      {({ control, formState: { errors } }) => (
        <>
          <div className="w-full">
            <InputField
              name="email"
              id="email-address"
              type="email"
              control={control}
              rules={{
                required: true,
                pattern: EMAIL_REGEX,
                maxLength: 45,
              }}
              error={errors.email}
              errorMessage="Invalid email"
              autoComplete="email"
            />
            <InputField
              name="password"
              id="password"
              type="password"
              control={control}
              rules={{
                required: true,
                minLength: 8,
              }}
              error={errors.password}
              errorMessage="Invalid format too short"
              autoComplete="current-password"
              trailingButton={
                <div className="absolute h-[54px] top-0 bottom-0 right-5 flex items-center mt-auto text-sm">
                  <a href="/" className="font-medium text-text-grey ">
                    Forgot your password?
                  </a>
                </div>
              }
            />
          </div>

          <button
            type="submit"
            className="w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-white pt-4 pb-5
              drop-shadow-md
              hover:bg-hover
              disabled:bg-disabled
              focus:outline-none focus:border-none"
          >
            Sign in
          </button>
        </>
      )}
    </Form>
  );
};
