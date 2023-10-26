import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './General__box.module.css';
import { Group2Icon } from './Group2Icon.js';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 138:51155 */
export const General__box: FC<Props> = memo(function General__box(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.gENERAL}>GENERAL</div>
      <div className={classes.settings}>Settings</div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon} />
      </div>
      <div className={classes.signOut}>Sign out</div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon2} />
      </div>
    </div>
  );
});
