import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 407 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.137024L407 0.13706M406.5 0.637024V73.637' stroke='url(#paint0_linear_535_322)' />
    <defs>
      <linearGradient
        id='paint0_linear_535_322'
        x1={406}
        y1={0.637024}
        x2={406}
        y2={73.637}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F1A738' />
        <stop offset={1} stopColor='#F1A738' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
