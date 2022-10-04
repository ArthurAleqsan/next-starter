import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { icons } from '@/configs/icons';
import { images } from '@/configs/images';

import { Progress } from '@/components/general/Progress';
import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './AutoCard.module.scss';

type Props = {
  color?: string;
  onClick?: () => void;
  onInfoClick?: () => void;
};

export const AutoCard: FC<Props> = ({ color = 'orange', onInfoClick, onClick }) => {
  return (
    <div className={styles.autocard}>
      <SvgIcon pointer src={icons.info} className={styles.autocard_infoIcon} onClick={onInfoClick} />
      <div onClick={onClick}>
        <div className={styles.autocard_flag}># 1 Green</div>
        <Image src={images.greenCar || ''} alt="Green" width={300} height={150} className={styles.autocard_img} />
        <div className={styles.autocard_item}>
          <div className={styles.autocard_item_iconBlock}>
            <SvgIcon size="md" pointer src={icons.maintenance} className={styles.autocard_item_iconBlock_icon} />
          </div>
          <div className="flexible aCenter jBetween grow">
            <div className={styles.autocard_item_counts}>
              8 of <span className={styles.autocard_item_counts_max}> 10</span>
            </div>
            <Progress percent={80} color={color} />
            <div className={styles.autocard_item_date}>08/11/21</div>
          </div>
          <div className={styles.autocard_item_divider} />
        </div>
        <div className={styles.autocard_item}>
          <div className={styles.autocard_item_iconBlock}>
            <SvgIcon size="md" pointer src={icons.events} className={styles.autocard_item_iconBlock_icon} />
          </div>
          <div className="flexible aCenter">
            <div className={styles.autocard_item_eventdate}>08/11/21</div>
            <div className={styles.autocard_item_leftdate}>4 days left</div>
          </div>
          <div className={styles.autocard_item_divider} />
        </div>
        <div className={styles.autocard_item}>
          <div className={styles.autocard_item_iconBlock}>
            <SvgIcon size="md" pointer src={icons.carParts} className={styles.autocard_item_iconBlock_icon} />
          </div>
          <div className={styles.autocard_item_carParts}>
            <span
              className={cn(
                styles.autocard_item_carParts_count,
                styles[`autocard_item_carParts_count_${color.toLocaleLowerCase()}`]
              )}
            >
              2
            </span>
            parts is close to maintenance
          </div>
        </div>
      </div>
    </div>
  );
};
