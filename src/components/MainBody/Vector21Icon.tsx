import { memo, SVGProps } from 'react';

const Vector21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 328 99' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M327.08 26.4562L286.312 0.316879C285.989 0.109993 285.614 0.000183105 285.23 0.000526428L1.99821 0.253372C0.894343 0.254356 0 1.1495 0 2.25337L0 78.1282C0 78.7406 0.280555 79.3192 0.761362 79.6985L24.686 98.5703C25.0389 98.8486 25.4752 99 25.9246 99L326 99C327.105 99 328 98.1046 328 97V68.8918V28.1398C328 27.4585 327.653 26.824 327.08 26.4562Z'
      stroke='#F1A738'
    />
  </svg>
);
const Memo = memo(Vector21Icon);
export { Memo as Vector21Icon };
