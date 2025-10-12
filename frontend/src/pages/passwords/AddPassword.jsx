import { cn } from '../../lib/utils';
import Header from '../../components/Header';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const AddPassword = () => {
  const navigate = useNavigate();

  return (
    <div className={cn('relative h-screen w-full bg-[#101922]')}>
      <Header
        onclick={() => navigate('/passwords')}
        className="flex-row-reverse justify-end gap-20"
        title="Add Password"
        icon={<X className="h-5 w-5 cursor-pointer text-white" />}
      />

      <form className="mt-6 flex flex-col gap-6 p-4">
        <InputField
          label="Website/Service"
          placeHolder="e.g., Google"
          className="border-none bg-[#0C141B] text-white"
        />
        <InputField
          label="Username"
          placeHolder="e.g., yourname@email.com"
          className="border-none bg-[#0C141B] text-white"
        />
        <InputField
          label="Website/Service"
          type="password"
          placeHolder="Enter password"
          className="border-none bg-[#0C141B] text-white"
        />

        <Button
          text="Generate Password"
          type="button"
          className="w-full cursor-pointer border-none bg-[#103457] font-medium text-blue-500"
        />
      </form>

      <div className="footer absolute inset-x-0 bottom-2 flex items-center justify-center gap-8 p-4">
        <Button
          text="Cancel"
          className="w-[45%] border-none bg-black py-3 font-medium"
        />
        <Button
          type="submit"
          text="Save"
          className="w-[45%] border-none bg-[#1173D4] py-3 font-medium"
        />
      </div>
    </div>
  );
};

export default AddPassword;
