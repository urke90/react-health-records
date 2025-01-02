import type { ComponentPropsWithRef } from 'react';

// ----------------------------------------------------------------

const BUTTON_VARIANTS = {
  default: 'py-1.5 px-3 rounded-md border-2 border-transparent',
  // primary: 'bg-cyan-500'
};

interface IButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'outlined';
}

const Button: React.FC<IButtonProps> = ({ className, variant = 'primary', ...rest }) => {
  return <button className={BUTTON_VARIANTS.default} {...rest} />;
};

export default Button;
