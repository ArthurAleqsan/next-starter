import cn from 'classnames';
import { FC } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';
import { Typography } from '@/components/general/Typography';

import styles from './ModalHeader.module.scss';

type Props = {
  onClose?: () => void;
  title?: string;
  iconName?: string;
  closeIcon?: boolean;
};

export const ModalHeader: FC<Props> = ({ onClose, title, iconName, closeIcon }) => {
  return onClose || title ? (
    <div className={styles.modalHeader}>
      {title && (
        <Typography
          variant="h3"
          noWrap
          className={cn(styles.modalHeader_title, { [styles.modalHeader_title_close]: closeIcon })}
        >
          {iconName && <SvgIcon pointer src={icons[iconName]} className={styles.modalHeader_icon} />}
          {title}
          {closeIcon && <SvgIcon pointer src={icons.close} onClick={onClose} />}
        </Typography>
      )}
    </div>
  ) : null;
};
