import React from 'react';
import { cn } from './../../lib/utils';

const Button = ({ text, className, type }) => {
  return (
    <button
      type={type}
      className={cn(
        'cursor-pointer rounded-md border border-neutral-500 py-2 text-center text-white',
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
