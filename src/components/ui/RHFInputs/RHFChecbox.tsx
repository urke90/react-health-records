import { Controller, useFormContext } from 'react-hook-form';
import type { ICheckboxProps } from '../Checkbox';
import Checkbox from '../Checkbox';

// ----------------------------------------------------------------

interface IRHFChecboxProps extends ICheckboxProps {
  name: string;
}

const RHFChecbox: React.FC<IRHFChecboxProps> = ({ name, label, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Checkbox checked={value} onCheckedChange={onChange} label={label} {...rest} />
      )}
    />
  );
};

export default RHFChecbox;
