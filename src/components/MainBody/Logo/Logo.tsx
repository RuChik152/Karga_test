import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    vector2?: string;
    root?: string;
  };
}
/* @figmaId 138:51133 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector3}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon4 className={classes.icon4} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon5 className={classes.icon5} />
      </div>
    </div>
  );
});
