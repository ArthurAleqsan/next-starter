import cn from 'classnames';
import { FC } from 'react';

import styles from './Progress.module.scss';

type Props = {
  percent?: string | number;
  color?: string;
  className?: string;
};

export const Progress: FC<Props> = ({ percent = 0, color = 'blue', className }) => {
  return (
    <div className={cn(styles.progress, className)}>
      <span
        className={cn(styles.progress_line, styles[`progress_line_${color?.toLocaleLowerCase()}`])}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};
