import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M17.1429 22.4762H1.52381V1.52381H17.1429V0H0V24H17.1429V22.4762Z' fill='#531039' />
    <path d='M8.95239 11.2381H7.42858V12.7619H8.95239V11.2381Z' fill='#531039' />
    <path
      d='M17.1048 18.2476L23.3714 12L17.1048 5.75236L16.0381 6.81902L20.4381 11.2381H10.8571V12.7619H20.4381L16.0381 17.1809L17.1048 18.2476Z'
      fill='#531039'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
