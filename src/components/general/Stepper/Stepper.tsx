import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import styles from './Stepper.module.scss';

type Props = {
  stepsCount: number;
  value?: number;
  onChange?: (step: number) => void;
  needClick?: boolean;
};

export const Stepper: FC<Props> = ({ stepsCount = 0, value = 0, onChange, needClick = true }) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <div className={styles.stepper}>
      {Array.from(Array(stepsCount).keys()).map((item) => (
        <div
          key={item}
          className={styles.step}
          onClick={() => {
            if (needClick) {
              setSelected(item);
              !!onChange && onChange(item);
            }
          }}
        >
          <div className={cn(styles.step_item, { [styles.step_item_active]: selected >= item })} />
        </div>
      ))}
      <div className={styles.stepper_divider} />
    </div>
  );
};
