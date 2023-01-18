import React from "react";

import Logo from "assets/logo.svg";
import { LoginForm } from "./LoginForm";
import { PromoSliders } from "./PromoSliders";

export const Layout = () => {
  return (
    <div className="w-full lg:h-full md:h-auto bg-white rounded-xl overflow-hidden lg:flex lg:items-center lg:p-5">
      <PromoSliders />
      <div className="flex flex-col w-full lg:h-full items-start justify-between sm:max-w-md sm:w-full sm:my-auto lg:w-5/12 sm:mx-auto px-6 py-7 lg:px-8">
        <img className="h-[31px]" src={Logo} alt="Logo" />
        <main className="w-full mb-14">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-gray-900 mt-6">
              Sign in
            </h1>
            <p className="mt-5 text-sm text-gray-600 lg:mb-14">
              Don’t have an account?
              <a
                href="/"
                className="font-medium text-primary hover:text-primary ml-2"
              >
                Sign up now
              </a>
            </p>
            <LoginForm />
          </div>
        </main>
        <ul className="flex justify-between w-full lg:justify-start">
          <li>
            <a
              href="/"
              className="font-medium text-text-grey hover:text-primary mr-6"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-text-grey hover:text-primary mr-6"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-text-grey hover:text-primary"
            >
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
