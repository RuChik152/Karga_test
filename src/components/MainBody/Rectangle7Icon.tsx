import { memo, SVGProps } from 'react';

const Rectangle7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 658 372' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H609L658 50.5V372H44.5L0 318.5V0Z' fill='url(#paint0_linear_535_324)' stroke='#F1A738' />
    <defs>
      <linearGradient
        id='paint0_linear_535_324'
        x1={658}
        y1={372}
        x2={-0.00000530146}
        y2={0.00000937732}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F1A738' stopOpacity={0.15} />
        <stop offset={1} stopColor='#F1A738' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Rectangle7Icon);
export { Memo as Rectangle7Icon };
