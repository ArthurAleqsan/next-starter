import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import styles from './KeyValue.module.scss';

type Props = {
  title: string;
  value: string;
  className?: string;
  withoutMargin?: boolean;
};

export const KeyValue: FC<Props> = ({ title, value, className, withoutMargin }) => {
  const { t } = useTranslation('common');
  return (
    <div className={cn(styles.keyvalue, className, { [styles.keyvalue_withoutMargin]: withoutMargin })}>
      <div className={styles.keyvalue_title}>{t(title)}</div>
      <div className={styles.keyvalue_value}>{value}</div>
    </div>
  );
};
