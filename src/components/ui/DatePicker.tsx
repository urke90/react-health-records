import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from '../icons/Calendar';

import './DatePicker.css';

// ----------------------------------------------------------------

type TDatePickerProps = React.ComponentProps<typeof ReactDatePicker>;

type IDatePickerProps = TDatePickerProps & {
  label?: string;
  errorMessage?: string;
};

const DatePicker: React.FC<IDatePickerProps> = ({ label = '', errorMessage = '', id, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="p2-regular text-gray-700" htmlFor={id}>
        {label}
      </label>
      <ReactDatePicker
        className="border-2 border-gray-300 rounded-md focus:border-cyan-400 outline-none placeholder:text-sm text-gray-800 transition cursor-pointer w-full"
        showIcon
        icon={<CalendarIcon />}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        toggleCalendarOnIconClick
        {...rest}
      />
      {errorMessage && <p className="p3-medium text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default DatePicker;
