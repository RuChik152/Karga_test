import { memo, SVGProps } from 'react';

const RyneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 88 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M73.3109 44.8173L86.8095 58.623L88 59.8405L76.2426 71.8653L69.339 64.8047L71.7199 62.3696L76.2431 66.9957L83.2391 59.8405L70.9304 47.2519L46.5588 72.1778L58.8675 84.7665L65.8636 77.6113L61.3404 72.9852L63.7213 70.5502L70.6249 77.6108L58.8675 89.6356L44.1784 74.6124L30.323 88.7825L29.1325 90L17.3751 77.9752L24.2787 70.9145L26.6596 73.3496L22.1364 77.9757L29.1325 85.1309L41.7965 72.1789L17.4248 47.2529L4.76086 60.2049L11.7569 67.3601L16.2801 62.734L18.661 65.1691L11.7574 72.2297L0 60.2049L15.0444 44.8183L0.35528 29.7951L12.1127 17.7703L19.0163 24.8309L16.6354 27.266L12.1122 22.6399L5.11614 29.7951L17.4248 42.3837L41.7965 17.4578L29.4878 4.86913L22.4917 12.0243L27.0149 16.6504L24.6339 19.0855L17.7304 12.0248L29.4878 -8.0536e-06L30.6782 1.21754L44.1769 15.0232L58.5107 0.363357L70.2681 12.3882L63.3645 19.4488L60.9836 17.0137L65.5068 12.3877L58.5107 5.2325L46.5578 17.4573L70.9294 42.3832L82.8823 30.1585L75.8863 23.0033L71.3631 27.6293L68.9822 25.1942L75.8858 18.1336L87.6432 30.1585L86.4527 31.376L73.3094 44.8183L73.3109 44.8173ZM44.1774 19.8913L19.8057 44.8173L44.1774 69.7433L68.549 44.8173L44.1774 19.8913Z'
      fill='#8B2062'
    />
    <path d='M4.00001 86L12.8195 86L13.0827 77.1845L4.26322 77.1845L4.00001 86Z' fill='#8B2062' />
  </svg>
);
const Memo = memo(RyneIcon);
export { Memo as RyneIcon };