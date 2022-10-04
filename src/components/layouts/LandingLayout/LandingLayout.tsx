import { FC, ReactNode } from 'react';

import styles from './LandingLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const LandingLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.landingLayout}>
      <main className={styles.landingLayout__body}>{children}</main>
    </div>
  );
};
