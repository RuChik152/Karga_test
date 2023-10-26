import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconlyLightSearch } from '../IconlyLightSearch/IconlyLightSearch';
import classes from './Group54.module.css';
import { SearchIcon } from './SearchIcon.js';
import { Vector12Icon } from './Vector12Icon.js';
import { Vector13Icon } from './Vector13Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 141:51350 */
export const Group54: FC<Props> = memo(function Group54(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame3}>
        <IconlyLightSearch
          swap={{
            search: <SearchIcon className={classes.icon} />,
          }}
        />
        <div className={classes.searchByKargaSkeletonGold}>Search by Karga, Skeleton, Gold...</div>
      </div>
      <div className={classes.vector12}>
        <Vector12Icon className={classes.icon2} />
      </div>
      <div className={classes.vector13}>
        <Vector13Icon className={classes.icon3} />
      </div>
    </div>
  );
});
