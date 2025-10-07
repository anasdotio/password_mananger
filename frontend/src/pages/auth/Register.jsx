import React from 'react';
import InputField from '../../components/common/InputField';
import { cn } from '../../lib/utils';

const Register = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#101922] p-1">
      <h3
        className={cn(
          'absolute inset-0 my-3 text-center font-mono text-xl text-white',
        )}
      >
        Password Manager
      </h3>

      <form className="flex w-full flex-col gap-4 p-3">
        <h1 className="text-center text-2xl text-white">Create Your Account</h1>

        <InputField
          name="fullName"
          type="text"
          placeHolder="Full Name"
          className="bg-[#1F2937] text-white focus:outline-none"
        />
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
      </form>
    </div>
  );
};

export default Register;
