import * as React from 'react';
import { SVGProps, memo } from 'react';
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={26}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.734 9.274c.796-.397 1.81-.982 2.824-1.783.214.445.237.832.127 1.145-.078.22-.225.413-.419.565-.21.165-.471.285-.76.35a2.505 2.505 0 0 1-1.772-.277Zm.138 4.069 1.054.609c-2.152 1.206-2.738 3.446-3.433 5.628-.695-2.182-1.28-4.422-3.433-5.628l1.055-.61a.516.516 0 0 0 .333-.507c-.097-2.043.455-2.947 1.2-3.514.266-.203.558-.305.845-.305.288 0 .58.102.846.305.744.567 1.296 1.471 1.2 3.514a.516.516 0 0 0 .333.508ZM11.493 0c1.219.033 2.44.27 3.5.73a8.802 8.802 0 0 1 2.805 1.945c.685.023 1.687-.738 2.152-1.45-.8 2.623-4.452 5.72-6.98 6.906l-.003-.001a2.42 2.42 0 0 0-1.474-.52c-.51 0-1.02.173-1.474.52l-.003.001c-2.528-1.185-6.18-4.283-6.98-6.907.466.713 1.467 1.474 2.152 1.45A8.803 8.803 0 0 1 7.992.73C9.054.27 10.276.033 11.494 0Zm-2.24 9.274a16.432 16.432 0 0 1-2.825-1.783c-.213.445-.237.832-.127 1.145.078.22.226.413.419.565.21.165.471.285.76.35.55.124 1.19.052 1.773-.277Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.669 6.51a14.17 14.17 0 0 0 1.446-1.744l.201.378c.647 1.294.984 2.584.984 4.035l-.002 2.302.012 1.194c.047 2.93.681 5.895 2.117 8.608l-3.005-2.423-2.126 3.45-2.233-2.103L11.492 26l-3.57-5.793L5.69 22.31l-2.126-3.45-3.005 2.423c1.436-2.713 2.07-5.678 2.117-8.608l.012-1.194-.001-2.302c0-1.451.336-2.74.983-4.035l.2-.378c.396.556.889 1.18 1.447 1.744l-.174.362c-.34.704-.451 1.49-.187 2.24.17.481.48.894.88 1.21a3.33 3.33 0 0 0 1.331.621c.314.071.634.1.952.09-.075.42-.107.856-.109 1.3L5.175 13.97l2.188 1.226c.175.098.341.21.497.336 1.804 1.62 2.888 6.41 3.633 8.75.745-2.34 1.83-7.13 3.633-8.75a3.64 3.64 0 0 1 .498-.336l2.187-1.226-2.835-1.637a7.704 7.704 0 0 0-.108-1.3c.317.01.637-.019.95-.09a3.329 3.329 0 0 0 1.331-.621c.4-.316.711-.729.881-1.21.265-.75.152-1.536-.187-2.24l-.174-.362Z"
      clipRule="evenodd"
    />
  </svg>
);
const DexscreenerIcon = memo(Icon);
export default DexscreenerIcon;
