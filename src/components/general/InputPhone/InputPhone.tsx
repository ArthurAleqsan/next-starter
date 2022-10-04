import cn from 'classnames';
import { FC } from 'react';
import ReactPhoneInput from 'react-phone-input-2';

import { UiSizeLayout } from '@/components/layouts/UiSizeLayout';

import styles from './InputPhone.module.scss';
import { Typography } from '../Typography';

import { UiElementHeightType, UiElementWidthType } from '@/types/ui';

type Props = {
  className?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  height?: UiElementHeightType;
  width?: UiElementWidthType;
  value: string;
  id: string;
  label?: string;
  error?: string;
};

export const InputPhone: FC<Props> = ({
  className,
  disabled,
  onChange,
  height = 'md',
  width,
  value,
  id,
  label,
  error,
}) => {
  const hasError = !!error;
  return (
    <UiSizeLayout width={width} height={height}>
      <div className={cn(styles.inputPhone, className, hasError ? styles.inputPhone__error : '')} id={id}>
        {label && (
          <Typography color="gray-300" variant="body4">
            {label}
          </Typography>
        )}
        <ReactPhoneInput
          containerClass="input-phone__container"
          inputProps={{ autoComplete: 'off' }}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
        {hasError && (
          <Typography color="error" variant="body4" className={styles.errorMessage}>
            {error}
          </Typography>
        )}
      </div>
    </UiSizeLayout>
  );
};
