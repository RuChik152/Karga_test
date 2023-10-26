import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './KARGA.module.css';

interface Props {
  className?: string;
}
/* @figmaId 138:51130 */
export const KARGA: FC<Props> = memo(function KARGA(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.kARGA}>KARGA</div>
    </div>
  );
});
