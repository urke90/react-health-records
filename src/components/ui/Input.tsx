import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// ----------------------------------------------------------------

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label = '', id, errorMessage, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="p2-regular text-gray-700" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          className={twMerge(
            'border-2 border-gray-300 rounded-md py-0.5 pl-2 focus:border-cyan-400 outline-none placeholder:text-sm text-gray-800 transition',
            className
          )}
          {...rest}
        />
        <p className="p3-medium text-red-500">{errorMessage}</p>
      </div>
    );
  }
);

export default Input;
