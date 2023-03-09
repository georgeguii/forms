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
      text-slate-900
      bg-[#a1b3d3] hover:bg-[#8fa1c7]
      00 
      disabled:bg-[#c1d3ee]
      transition-colors duration-300'
      disabled={!enable}
    >
      {value.toUpperCase()}
    </button>
  );
};