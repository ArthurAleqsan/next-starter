import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode, useEffect, useState } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './Card.module.scss';

type Props = {
  title?: string;
  children: ReactNode;
  titleWithBorder?: boolean;
  className?: string;
  needCollapse?: boolean;
  onEdit?: () => void;
  open?: boolean;
};

export const Card: FC<Props> = ({ title, children, titleWithBorder, className, needCollapse, onEdit, open = true }) => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className={cn(styles.card, className)}>
      {!!title && (
        <div
          className={cn(styles.card_header, {
            [styles.card_header_collapse]: needCollapse,
            [styles.card_header_inActive]: !isOpen,
          })}
        >
          <div className={styles.card_titleBlock}>
            <h3 className={cn(styles.card_title, { [styles.card_title_border]: titleWithBorder })}>{t(title)}</h3>
            {!!onEdit && <SvgIcon pointer src={icons.edit} onClick={onEdit} />}
          </div>
          {needCollapse && (
            <SvgIcon
              pointer
              src={icons.listArrowDown}
              className={cn(styles.card_icon, { [styles.card_icon_inActive]: isOpen })}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      )}
      <div className={cn(styles.card_content, { [styles.card_content_inActive]: !isOpen && needCollapse })}>
        {children}
      </div>
    </div>
  );
};
