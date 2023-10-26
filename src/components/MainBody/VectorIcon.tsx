import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 359 311' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 17.637L0.500013 309.637M339 310.137H0M339.5 278.637V310.637M358.344 261L339.344 279M19.3439 0L0.343872 18'
      stroke='#F1A738'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
