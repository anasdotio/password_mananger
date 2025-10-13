import { cn } from '../../lib/utils';
import Header from '../../components/Header';
import { Copy, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const PasswordDetails = () => {
  const navigate = useNavigate();

  return (
    <div className={cn('h-screen w-full bg-[#101922] p-4')}>
      <Header
        onclick={() => navigate('/passwords')}
        className="flex-row-reverse justify-end gap-17"
        title="Password Details"
        icon={<X className="h-5 w-5 cursor-pointer text-white" />}
      />

      <form className="mt-6 flex flex-col gap-6">
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
          icon={<Copy className="w-hs h-4" />}
          text="Copy Password"
          type="button"
          className="w-full cursor-pointer border-none bg-[#103457] font-medium text-blue-500"
        />
      </form>

      <div className="footer flex items-center justify-center gap-11 my-6">
        <Button
          text="Edit"
          className="w-[45%] border-none bg-[#103457] py-3 font-medium text-blue-500"
        />
        <Button
          type="submit"
          text="Delete"
          className="w-[45%] border-none bg-[#EF4444] py-3 font-medium"
        />
      </div>
    </div>
  );
};

export default PasswordDetails;
