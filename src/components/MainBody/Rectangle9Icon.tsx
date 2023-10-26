import { memo, SVGProps } from 'react';

const Rectangle9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 151 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M18.5 0H151V24.5L118 55L0 55V17L18.5 0Z' fill='#8B2062' fillOpacity={0.54} />
  </svg>
);
const Memo = memo(Rectangle9Icon);
export { Memo as Rectangle9Icon };
