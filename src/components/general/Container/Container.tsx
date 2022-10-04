import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './Container.module.scss';

type Props = {
  title: string;
  withBack?: boolean;
  className?: string;
  children: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

export const Container: FC<Props> = ({ title, withBack, children, rightContent, leftContent, className }) => {
  const { t } = useTranslation('common');
  const { back } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.container_header_left}>
          {withBack && (
            <div className={styles.container_header_left_back} onClick={() => back()}>
              <SvgIcon pointer src={icons.arrowLeft} />
              <span className={styles.arrow_back_text}>{t('pages.back')}</span>
            </div>
          )}
          <h1 className={styles.container_header_title}>{t(title)}</h1>
          {leftContent}
        </div>
        <div className={styles.container_header_right}>{rightContent}</div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
