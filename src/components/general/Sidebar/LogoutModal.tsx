import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import { SimpleModal } from '@/components/general/modal/SimpleModal';
import { Typography } from '@/components/general/Typography';

import styles from './Sidebar.module.scss';

type Props = {
  onCancel: () => void;
  onSubmit: () => void;
};

export const LogoutModal: FC<Props> = ({ onCancel, onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <SimpleModal
      submitBtnType="alert"
      submitButtonText="pages.logout"
      title="pages.logout"
      className={styles.logoutModal}
      isOpenCustom
      width="xs"
      iconName="warning"
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      <Typography component="p" className={styles.logoutModal_description}>
        {t('modals.logout_descitprion')}
      </Typography>
    </SimpleModal>
  );
};
