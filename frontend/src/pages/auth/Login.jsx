import React, { useEffect } from 'react';
import InputField from '../../components/common/InputField';
import { cn } from '../../lib/utils';
import Button from '../../components/common/Button';
import { Link, replace, useNavigate } from 'react-router-dom';
import { useAppDispatch } from './../../store/hooks';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { login } from '../../features/auth/authAPI';
import { Loader } from 'lucide-react';

const Login = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      navigate('/passwords', { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (data) => {
    try {
      const res = await dispatch(login(data)).unwrap();

      if (res.statusCode === 200) {
        reset();
        navigate('/passwords', { replace: true });
      }
    } catch (err) {
      alert(error || 'Something went wrong');
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#101922] p-3">
      <h3
        className={cn(
          'absolute inset-x-0 top-0 my-3 text-center font-mono text-xl text-white',
        )}
      >
        Password Manager
      </h3>

      <div className="w-full">
        {error && (
          <p className="mb-3 rounded-md border border-red-600 bg-red-500/30 p-2 text-center font-semibold text-red-600">
            {error}
          </p>
        )}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-full flex-col gap-4"
        >
          <h1 className="text-center text-2xl text-white">Login</h1>

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
            isLoading={loading}
            text={loading ? 'logging in...' : 'Sign In'}
            type="submit"
            icon={loading && <Loader size={16} className="animate-spin" />}
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
