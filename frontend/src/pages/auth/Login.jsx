import React from 'react';
import InputField from '../../components/common/InputField';
import { cn } from '../../lib/utils';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#101922] p-1">
      <h3
        className={cn(
          'absolute inset-x-0 top-0 my-3 text-center font-mono text-xl text-white',
        )}
      >
        Password Manager
      </h3>

      <div className="w-full">
        <form className="flex w-full flex-col gap-4 p-3">
          <h1 className="text-center text-2xl text-white">Login</h1>

          <InputField
            name="email"
            type="email"
            placeHolder="Email"
            className="bg-[#1F2937] text-white focus:outline-none"
          />
          <InputField
            name="password"
            type="password"
            placeHolder="Password"
            className="bg-[#1F2937] text-white focus:outline-none"
          />

          <Button
            text="Sign Up"
            type="submit"
            className="border-none bg-[#3B82F6] font-sans font-semibold"
          />

          <p className="text-center font-sans text-sm text-[#9CA3AF]">Or</p>

          <Button
            text="Continue with Google"
            className="cursor-pointer border-[#323C4C] bg-[#1F2937] font-mono font-semibold"
          />
        </form>

        <p className="mt-10 text-center text-[#9CA3AF]">
          Don't have an account?{' '}
          <Link
            className="font-semibold text-blue-500 hover:underline"
            to="/auth/register"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
