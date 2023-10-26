import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.14446 13.4854L10.7706 22.7925C12.2629 24.4025 14.8056 24.4025 16.298 22.7925L24.9241 13.4854C27.7833 10.4004 27.7833 5.39871 24.9241 2.31373C22.0648 -0.771243 17.429 -0.771243 14.5696 2.31373C14.0107 2.91697 13.0579 2.91697 12.4989 2.31373C9.63956 -0.771243 5.00374 -0.771243 2.14446 2.31373C-0.71482 5.3987 -0.71482 10.4004 2.14446 13.4854Z'
      stroke='#F9F9F9'
      strokeWidth={3}
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
