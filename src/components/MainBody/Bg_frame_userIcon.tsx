import { memo, SVGProps } from 'react';

const Bg_frame_userIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 523 311' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 18L19 0L523 1V262H358.382L340 279V311H0V18Z' fill='url(#paint0_linear_535_307)' />
    <defs>
      <linearGradient id='paint0_linear_535_307' x1={0} y1={0} x2={339.5} y2={311} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F1A738' stopOpacity={0.32} />
        <stop offset={0.729167} stopColor='#F1A738' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Bg_frame_userIcon);
export { Memo as Bg_frame_userIcon };
