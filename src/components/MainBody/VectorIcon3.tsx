import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 165 161' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M165 160.137H0M164.5 159.637V0.637024' stroke='url(#paint0_linear_535_323)' />
    <defs>
      <linearGradient
        id='paint0_linear_535_323'
        x1={165}
        y1={159.637}
        x2={165}
        y2={0.637031}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F1A738' />
        <stop offset={1} stopColor='#F1A738' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
