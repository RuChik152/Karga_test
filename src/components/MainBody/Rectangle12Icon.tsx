import { memo, SVGProps } from 'react';

const Rectangle12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 151 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 10.7386L23.5 0H151V22.5L140 34.2614L129 45H0V22.5L12 10.7386Z' fill='#F1A738' />
  </svg>
);
const Memo = memo(Rectangle12Icon);
export { Memo as Rectangle12Icon };
