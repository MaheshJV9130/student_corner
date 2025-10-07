import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='h-screen bg-[url(/BG_img.png)] bg-no-repeat bg-center bg-cover'>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-800/70 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
            Sign in to your account
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                placeholder="******"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
