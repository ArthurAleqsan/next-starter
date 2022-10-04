import { FC } from 'react';

import styles from './HomeSection.module.scss';
import { ExampleSection } from '../ExampleSection';

export const HomeSection: FC = () => {
  return (
    <div className={styles.homeSection}>
      <ExampleSection />
    </div>
  );
};
