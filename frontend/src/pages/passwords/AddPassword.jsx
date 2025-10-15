import Header from '../../components/Header';
import { Loader, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createPassword } from '../../features/passwords/passAPI';

const AddPassword = () => {
  const { loading, error } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddPassword = async (data) => {
    try {
      const res = await dispatch(createPassword(data)).unwrap();

      if (res.statusCode === 201) {
        reset();
        navigate('/passwords', { replace: true });
        alert('Password added successfully');
      }
    } catch (err) {
      console.log(err);
      alert(error || 'Something went wrong');
    }
  };

  const handleCancel = () => {
    reset();
    navigate('/passwords');
  };

  return (
    <div className="relative h-screen w-full bg-[#101922]">
      <Header
        onclick={() => navigate('/passwords')}
        className="flex-row-reverse justify-end gap-20"
        title="Add Password"
        icon={<X className="h-5 w-5 cursor-pointer text-white" />}
      />

      <form
        onSubmit={handleSubmit(handleAddPassword)}
        className="mt-6 flex flex-col gap-6 p-4"
      >
        <InputField
          label="Website/Service"
          placeHolder="e.g., Google"
          className="border-none bg-[#0C141B] text-white"
          {...register('service', { required: 'Service is required' })}
          error={errors.website && errors.website.message}
        />
        <InputField
          label="Username"
          placeHolder="e.g., yourname@email.com"
          className="border-none bg-[#0C141B] text-white"
          {...register('username', { required: 'Username is required' })}
          error={errors.username && errors.username.message}
        />
        <InputField
          label="Website/Service"
          type="password"
          placeHolder="Enter password"
          className="border-none bg-[#0C141B] text-white"
          {...register('password', { required: 'Password is required' })}
          error={errors.password && errors.password.message}
        />

        <Button
          text="Generate Password"
          type="button"
          className="w-full cursor-pointer border-none bg-[#103457] font-medium text-blue-500"
        />
      </form>

      <div className="footer absolute inset-x-0 bottom-2 flex items-center justify-center gap-8 p-4">
        <Button
          onclick={handleCancel}
          type="button"
          text="Cancel"
          className="w-[45%] border-none bg-black py-3 font-medium"
        />
        <Button
          onclick={handleSubmit(handleAddPassword)}
          isLoading={loading}
          icon={loading && <Loader className="animate-spin" size={16} />}
          type="submit"
          text={loading ? 'Saving...' : 'Save'}
          className="w-[45%] border-none bg-[#1173D4] py-3 font-medium"
        />
      </div>
    </div>
  );
};

export default AddPassword;
