import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useMemo, useState } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './Tabs.module.scss';

type TabItem = {
  title: string;
  icon?: string;
  activeIcon?: string;
};

type Props = {
  type?: 'primary' | 'secondary';
  options: TabItem[];
  value?: number;
  onChange?: (tab: number) => void;
  className?: string;
};

export const Tabs: FC<Props> = ({ type = 'primary', options, value, onChange, className }) => {
  const { t } = useTranslation('common');
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setSelected(value || 0);
  }, [value]);

  const isPrimary = useMemo(() => type === 'primary', [type]);

  return (
    <div className={cn(styles.tabs, styles[`tabs_${type}`], className)}>
      {options?.map(({ title, icon, activeIcon }, tab) => (
        <div
          key={tab}
          className={cn(styles[`tabs_${type}_item`], { [styles[`tabs_${type}_item_active`]]: selected === tab })}
          style={{ width: isPrimary ? `${100 / options.length}%` : 'auto' }}
          onClick={() => {
            setSelected(tab);
            !!onChange && onChange(tab);
          }}
        >
          {icon && activeIcon && (
            <SvgIcon
              pointer
              src={icons[selected === tab ? activeIcon : icon]}
              className={styles[`tabs_${type}_item_icon`]}
            />
          )}
          <span
            className={cn(styles[`tabs_${type}_item_title`], {
              [styles[`tabs_${type}_item_title_active`]]: selected === tab,
            })}
          >
            {t(title)}
          </span>
        </div>
      ))}
      {isPrimary && (
        <div
          className={styles[`tabs_${type}_divider`]}
          style={{ width: `${100 / options.length}%`, left: `${(selected * 100) / options.length}%` }}
        />
      )}
    </div>
  );
};
