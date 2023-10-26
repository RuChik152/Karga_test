import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconlyLightSearch.module.css';
import { SearchIcon } from './SearchIcon.js';

interface Props {
  className?: string;
  swap?: {
    search?: ReactNode;
  };
}
/* @figmaId 28:67 */
export const IconlyLightSearch: FC<Props> = memo(function IconlyLightSearch(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.search}>{props.swap?.search || <SearchIcon className={classes.icon} />}</div>
    </div>
  );
});
