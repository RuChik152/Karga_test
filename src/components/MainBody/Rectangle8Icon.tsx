import { memo, SVGProps } from 'react';

const Rectangle8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 298 372' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H298V320L243.5 372H0V0Z' fill='url(#paint0_linear_535_325)' stroke='#8B2062' />
    <defs>
      <linearGradient id='paint0_linear_535_325' x1={-2.5} y1={-4} x2={243} y2={372} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#8B2062' stopOpacity={0.64} />
        <stop offset={0.588542} stopColor='#8B2062' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Rectangle8Icon);
export { Memo as Rectangle8Icon };
