import cn from 'classnames';
import { FC } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './NotifyItem.module.scss';

type Props = {
  date?: string;
  selected?: boolean;
  name?: string;
  from?: string;
  className?: string;
};

export const NotifyItem: FC<Props> = ({ selected, name, from, date, className }) => {
  return (
    <div className={cn(styles.notify, className, { [styles.notify_active]: selected })}>
      <SvgIcon pointer src={icons.trash} className={styles.notify_trash} />
      <div className={styles.notify_content}>
        <div className={styles.notify_name}>
          {name} <span className={styles.notify_from}>from {from}</span>
        </div>
        <div className={styles.notify_date}>{date}</div>
      </div>
    </div>
  );
};
