import React from 'react';
import { cn } from './../../lib/utils';

const Button = ({ text, className, type = 'button', icon }) => {
  return (
    <button
      type={type}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-md border border-neutral-500 py-2 text-white',
        className,
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}

      {text}
    </button>
  );
};

export default Button;
