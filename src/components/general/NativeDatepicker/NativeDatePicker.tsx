import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent } from 'react';

import { UiSizeLayout } from '@/components/layouts/UiSizeLayout';

import styles from './styles.module.scss';
import { Typography } from '../Typography';

import { UiElementHeightType, UiElementWidthType } from '@/types/ui';

export type Props = {
  getCustomDateFormat?: (date: Date) => string | any;
  customConfig?: Record<string, any>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange: (date: string) => void;
  onClick?: () => void;
  onClear?: () => void;
  onBlur?: (e: FocusEvent<HTMLElement | HTMLInputElement>) => void;
  height?: UiElementHeightType;
  width?: UiElementWidthType;
  error?: boolean;
  value?: string;
  name: string;
  id: string;
  min?: string;
  max?: string;
  size?: 'lg' | 'md' | 'auto';
  label?: string;
};
export const NativeDatePicker: FC<Props> = ({
  name,
  value,
  onChange,
  id,
  error,
  width,
  height,
  min = '',
  max = '',
  className,
  size = 'auto',
  placeholder,
  label,
}) => {
  const handleChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const hasError = !!error;
  return (
    <UiSizeLayout width={width} height={height}>
      {label && (
        <Typography color="gray-300" variant="body4">
          {label}
        </Typography>
      )}
      <div
        className={cn(
          styles.nativeDatepicker,
          {
            [styles[`nativeDatepicker_size__${size}`]]: size,
            [styles.nativeDatepicker__error]: hasError,
          },
          className
        )}
      >
        <input
          type="date"
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={handleChange}
          className={styles[size]}
        />
      </div>
    </UiSizeLayout>
  );
};
