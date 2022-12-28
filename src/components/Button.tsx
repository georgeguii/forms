import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  enable?: boolean;
}

export function Button({ value, enable = true }: ButtonProps) {
  return (
    <button
      type='submit'
      className='px-10 h-12 mt-5 rounded-md font-semibold
      flex justify-center items-center
      text-gray-100
      bg-cyan-600 hover:bg-cyan-7
      00 
      disabled:bg-cyan-500
      transition-colors duration-300'
      disabled = {!enable}
    >
      {value.toUpperCase()}
    </button>
  );
};