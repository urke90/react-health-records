import type { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

// ----------------------------------------------------------------

const BUTTON_VARIANTS = {
  default: 'py-1.5 px-3 rounded-md border-2 border-transparent transition',
  primary: 'bg-cyan-400 border-cyan-400 text-white hover:bg-cyan-500 hover:border-cyan-500',
  outlined: 'text-gray-700 border-cyan-400 hover:bg-cyan-400 hover:text-white',
};

interface IButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'outlined';
}

const Button: React.FC<IButtonProps> = ({ className, variant = 'primary', ...rest }) => {
  return (
    <button
      className={twMerge(BUTTON_VARIANTS.default, BUTTON_VARIANTS[variant], className)}
      {...rest}
    />
  );
};

export default Button;
