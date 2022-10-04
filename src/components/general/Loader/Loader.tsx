import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';
import { Typography } from '../Typography';

export type Props = {
  className?: string;
  color?: 'primary' | 'secondary' | 'onSecondary';
  size?: 'sm' | 'md' | 'lg';
  loadingText?: string;
};

export const Loader: FC<Props> = ({ className, color = 'secondary', size = 'sm', loadingText }) => {
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
      <Typography color="gray-300" fontWeight="600">
        {loadingText}
      </Typography>
    </div>
  );
};
