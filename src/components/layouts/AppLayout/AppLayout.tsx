import { FC, ReactNode } from 'react';

// import { Sidebar } from '@/components/general/Sidebar';

import styles from './AppLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.applayout}>
      {/* <Sidebar /> */}
      <div className={styles.pagecontent}>{children}</div>
    </div>
  );
};
