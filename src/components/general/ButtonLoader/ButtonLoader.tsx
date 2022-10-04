import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export type Props = {
  className?: string;
  color?: 'primary' | 'secondary' | 'onSecondary';
  size?: 'sm' | 'md' | 'lg';
};

export const ButtonLoader: FC<Props> = ({ className, color = 'secondary', size = 'sm' }) => {
  return (
    <div
      className={cn(
        styles['lds-ring'],
        {
          [styles[`lds-ring_color_${color}`]]: color,
          [styles[`lds-ring_size_${size}`]]: size,
        },
        className
      )}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
