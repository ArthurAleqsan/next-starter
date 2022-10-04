import cn from 'classnames';
import { FC } from 'react';

import styles from './Label.module.scss';

type Props = {
  name: string;
};

export const Label: FC<Props> = ({ name }) => {
  return (
    <div className={cn(styles.label, styles[`label_${name.split(' ').join('').toLocaleLowerCase()}`])}>
      <span className={styles.label_text}>{name}</span>
    </div>
  );
};
