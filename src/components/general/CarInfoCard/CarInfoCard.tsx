import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './CarInfoCard.module.scss';

type Props = {
  name: string;
  value: string;
  icon: string;
};

export const CarInfoCard: FC<Props> = ({ name, value, icon }) => {
  const { t } = useTranslation('common');
  return (
    <div className={cn(styles.carInfoCard)}>
      <SvgIcon src={icons[icon]} />
      <div className={styles.carInfoCard_name}>{t(name)}</div>
      <div className={styles.carInfoCard_value}>{value}</div>
    </div>
  );
};
