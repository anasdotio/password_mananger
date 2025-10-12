import React from 'react';
import { cn } from '../../lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const InputField = (
  { label, name, type = 'text', placeHolder, className = '', error, ...props },
  ref,
) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`flex flex-col gap-1`}>
      {label && (
        <label className="text-[#808793]" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={isPassword && showPassword ? 'text' : type}
          name={name}
          id={name}
          ref={ref} // important for React hook form
          placeholder={placeHolder}
          className={cn(
            `w-full rounded-md border border-[#323C4C] px-4 py-2 placeholder:text-[#9CA3AF]`,
            className,
            error && 'border-red-500',
          )}
          {...props}
        />

        {isPassword && (
          <button
            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default React.forwardRef(InputField);
