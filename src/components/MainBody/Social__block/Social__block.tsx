import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Social__block.module.css';
import { Social__linkIcon } from './Social__linkIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 138:51154 */
export const Social__block: FC<Props> = memo(function Social__block(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.social}>Social</div>
      <div className={classes.social__link}>
        <Social__linkIcon className={classes.icon} />
      </div>
    </div>
  );
});
