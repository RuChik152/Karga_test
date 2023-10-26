import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Group84Icon } from './Group84Icon.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './MainMenu.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 138:51123 */
export const MainMenu: FC<Props> = memo(function MainMenu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.mAIN}>MAIN</div>
      <div className={classes.friends}>friends</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.bestiary}>Bestiary</div>
      <div className={classes.group84}>
        <Group84Icon className={classes.icon2} />
      </div>
      <div className={classes.skills}>Skills</div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon3} />
      </div>
    </div>
  );
});
