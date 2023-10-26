import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1379 961' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M89 32.5L137 0L1290 2.5L1379 91.5L1378 872L1289.24 960.5L89.5 959L0 870V185L89 128V32.5Z' fill='black' />
  </svg>
);
const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };
