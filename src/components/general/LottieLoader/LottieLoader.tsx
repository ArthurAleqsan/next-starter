import { FC } from 'react';
import Lottie from 'react-lottie-player';

import LoaderIcon from './loader.json';
import styles from './styles.module.scss';
import { Typography } from '../Typography';

type Props = {
  width?: number | string;
  height?: number | string;
  loadingText?: string;
};

export const LottiLoader: FC<Props> = ({ width = 'auto', height = 'auto', loadingText }) => {
  return (
    <div className={styles.loaderWrapper} style={{ width, height }}>
      <Lottie loop animationData={LoaderIcon} play style={{ width, height }} />
      <Typography color="gray-300" fontWeight="600">
        {loadingText}
      </Typography>
    </div>
  );
};
