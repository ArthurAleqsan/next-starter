import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';

import { Button } from '@/components/general/Button';
import { ModalBase } from '@/components/general/modal/ModalBase';
import { ModalHeader } from '@/components/general/modal/ModalHeader';

import styles from './SimpleModal.module.scss';

type Props = {
  isOpenCustom?: boolean;
  bodyHeight?: 'default' | 'full';
  noPadding?: boolean;
  closeIcon?: boolean;
  className?: string;
  onClose?: () => void;
  children: ReactNode;
  width?: 'xs' | 'sm' | 'md' | 'min-content' | 'full';
  title?: string;
  iconName?: string;
  cancelButtonText?: string;
  submitButtonText?: string;
  submitBtnType?: 'primary' | 'secondary' | 'alert' | 'none' | 'transparent' | undefined;
  customFooter?: ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
};

export const SimpleModal: FC<Props> = ({
  isOpenCustom = false,
  cancelButtonText = 'buttons.cancel',
  submitButtonText = 'buttons.save',
  submitBtnType = 'primary',
  customFooter,
  bodyHeight,
  noPadding,
  onSubmit,
  onCancel,
  closeIcon,
  iconName,
  className,
  children,
  onClose,
  width,
  title = '',
}) => {
  const { t } = useTranslation('common');
  const modalBaseProps = {
    bodyHeight,
    width,
    open: isOpenCustom,
  };

  return (
    <ModalBase {...modalBaseProps}>
      {(title || closeIcon) && (
        <ModalHeader closeIcon={closeIcon} onClose={onClose} title={t(title)} iconName={iconName} />
      )}
      <div
        className={cn(
          styles.simpleModal__content,
          {
            [styles.simpleModal__content_noPadding]: noPadding,
          },
          className
        )}
      >
        {children}
      </div>
      {customFooter ||
        (!!onSubmit && (
          <div className={styles.simpleModal_footer}>
            <Button color={submitBtnType} size="md" onClick={onSubmit}>
              {t(submitButtonText)}
            </Button>
            <Button className={styles.simpleModal_footer_cancelButton} color="transparent" size="md" onClick={onCancel}>
              {t(cancelButtonText)}
            </Button>
          </div>
        ))}
    </ModalBase>
  );
};
