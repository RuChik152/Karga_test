import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle
      cx={9.76659}
      cy={9.76659}
      r={8.98856}
      stroke='#757575'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.0183 16.4851L19.5423 20'
      stroke='#757575'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
