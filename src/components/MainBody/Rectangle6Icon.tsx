import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 180 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 16L17.5 0H180V31.75L166.5 45H0V16Z' fill='#F1A738' stroke='#F1A738' />
  </svg>
);
const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
