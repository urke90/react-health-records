import * as RadixCheckbox from '@radix-ui/react-checkbox';

// ----------------------------------------------------------------

export interface ICheckboxProps extends RadixCheckbox.CheckboxProps {
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, id = '', ...rest }) => {
  return (
    <div className="flex items-center">
      <RadixCheckbox.Root
        className="flex size-5 appearance-none items-center justify-center rounded border-2 border-cyan-400 data-[state=checked]:bg-cyan-400"
        id={id}
        {...rest}
      >
        <RadixCheckbox.Indicator className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="pl-[15px] text-[15px] leading-none text-gray-700" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
