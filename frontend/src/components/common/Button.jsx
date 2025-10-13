import React from 'react';
import { cn } from './../../lib/utils';

const Button = ({ text, className, type = 'button', icon, isLoading }) => {
  return (
    <button
      disabled={type === 'submit' && isLoading}
      type={type}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-md border border-neutral-500 py-2 text-white hover:opacity-80 disabled:cursor-none disabled:opacity-50',
        className,
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}

      {text}
    </button>
  );
};

export default Button;
