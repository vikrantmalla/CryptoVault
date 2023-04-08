import React from "react";
import { useForm } from "react-hook-form";
import { SignUpSubmitForm } from "@/types/form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      signupEmail: "",
      signupPassword: "",
      signupConfirmPassword: "",
    },
  });

  const submit = (data: SignUpSubmitForm) => {
    console.log(data);
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return "Please enter your password";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
  };

  const validateConfirmPassword = (value: string) => {
    const password = watch("signupPassword");
    if (!value) {
      return "Please enter your confirm password";
    }
    if (value !== password) {
      return "Passwords do not match";
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter Email"
          {...register("signupEmail", {
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.signupEmail != null && (
          <small className="error-message block text-red-600 mt-2">
            {errors.signupEmail.message}
          </small>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter Password"
          {...register("signupPassword", {
            validate: validatePassword,
          })}
        />
        {errors.signupPassword != null && (
          <small className="error-message block text-red-600 mt-2">
            {errors.signupPassword.message}
          </small>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Confirm Password"
          {...register("signupConfirmPassword", {
            validate: validateConfirmPassword,
          })}
        />
        {errors.signupConfirmPassword != null && (
          <small className="error-message block text-red-600 mt-2">
            {errors.signupConfirmPassword.message}
          </small>
        )}
      </div>
      <div className="my-auto">
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUp;
