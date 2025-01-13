import type { SVGProps } from 'react';

// ----------------------------------------------------------------

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-calendar-clock"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M16 2v4M8 2v4M3 10h5M17.5 17.5 16 16.3V14" />
    <circle cx={16} cy={16} r={6} />
  </svg>
);
export default CalendarIcon;
