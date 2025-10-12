import React from 'react';
import InputField from '../../components/common/InputField';
import { cn } from '../../lib/utils';
import Button from '../../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {} from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { register as registerAction } from './../../features/auth/authAPI';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = async (data) => {
    try {
      const res = await dispatch(registerAction(data)).unwrap();
      console.log(res);
      if (res.statusCode === 201) {
        reset();
        navigate('/passwords');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong');
    }
  };

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
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex w-full flex-col gap-6 p-3"
        >
          <h1 className="text-center text-2xl text-white">
            Create Your Account
          </h1>

          <InputField
            name="fullName"
            type="text"
            placeHolder="Full Name"
            className="bg-[#1F2937] text-white focus:outline-none"
            {...register('fullName', { required: 'Full name is required' })}
            error={errors.fullName?.message}
          />
          <InputField
            name="email"
            type="email"
            placeHolder="Email"
            className="bg-[#1F2937] text-white focus:outline-none"
            {...register('email', { required: 'Email is required' })}
            error={errors.email?.message}
          />
          <InputField
            name="password"
            type="password"
            placeHolder="Password"
            className="bg-[#1F2937] text-white focus:outline-none"
            {...register('password', { required: 'Password is required' })}
            error={errors.password?.message}
          />

          <Button
            text="Sign Up"
            type="submit"
            className="border-none bg-[#3B82F6] font-sans font-semibold"
          />

          <p className="text-center font-sans text-sm text-[#9CA3AF]">
            Or sign up with
          </p>

          <Button
            text="Sign up with Google"
            className="cursor-pointer border-[#323C4C] bg-[#1F2937] font-mono font-semibold"
          />
        </form>

        <p className="mt-10 text-center text-[#9CA3AF]">
          Already have an account?{' '}
          <Link
            className="font-semibold text-blue-500 hover:underline"
            to="/auth/login"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
