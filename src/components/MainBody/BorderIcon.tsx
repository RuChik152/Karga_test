import { memo, SVGProps } from 'react';

const BorderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1376 960' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1286 959.293L1374.29 871M0.707096 870.996L89.9996 959.296M1286.71 2L1375 90.2929M1286.5 1.5L137.5 0L89.2929 33V128L0.707096 185L0.5 870.5M1374.5 870.499L1375.5 90.5M90.5 959.5H1285.5'
      stroke='#F1A738'
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(BorderIcon);
export { Memo as BorderIcon };
