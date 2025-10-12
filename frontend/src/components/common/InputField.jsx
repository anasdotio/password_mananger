import React from 'react';
import { cn } from '../../lib/utils';

const InputField = ({
  label,
  name,
  type = 'text',
  placeHolder,
  className = '',
  error,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      {label && (
        <label className="text-[#808793]" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        className={cn(
          `w-full rounded-md border border-[#323C4C] px-4 py-2 placeholder:text-[#9CA3AF]`,
          className,
          error && 'border-red-500',
        )}
        {...props}
      />
    </div>
  );
};

export default InputField;
