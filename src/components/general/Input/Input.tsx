import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';
import { UiSizeLayout } from '@/components/layouts/UiSizeLayout';

import styles from './Input.module.scss';
import { Typography } from '../Typography';

import { UiElementHeightType, UiElementWidthType } from '@/types/ui';

export type Props = {
  placeholder?: string;
  rightBlock?: ReactNode;
  className?: string;
  pattern?: RegExp;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  height?: UiElementHeightType;
  width?: UiElementWidthType;
  error?: string | boolean;
  type?: 'password' | 'text' | 'number';
  value: string;
  name: string;
  id?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm' | 'auto';
  disabled?: boolean;
  readOnly?: boolean;
  variant?: 'withIcon' | 'dropdown' | 'simple' | 'currency';
  currency?: string;
  resetInputValue?: (name: string) => void;
  icon?: string;
  min?: number;
  iconPosition?: 'left' | 'right';
  inputHeight?: number;
};

const iconPositionHashMap = {
  left: '0 16px 0 47px',
  right: '0 70px 0 16px',
};

export const Input: FC<Props> = ({
  placeholder,
  rightBlock,
  className,
  onChange,
  pattern,
  onFocus,
  onBlur,
  height = 'md',
  width,
  error,
  value,
  name,
  type = 'text',
  id,
  label,
  size = 'auto',
  disabled = false,
  readOnly = false,
  variant = 'simple',
  currency,
  resetInputValue,
  min,
  icon,
  iconPosition = 'right',
  inputHeight = 52,
  ...rest
}) => {
  const [inputPadding, setInputPadding] = useState('0 16px');
  const [passwordVisible, setPassowrdVisible] = useState(false);

  const [inputType, setInputType] = useState(type);
  useEffect(() => {
    if (variant !== 'simple') {
      setInputPadding(iconPositionHashMap[iconPosition]);
    }
  }, [value, iconPosition]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      const value = e.target.value;

      if (!value.match(pattern) && value !== '') {
        e.preventDefault();
      } else {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };

  const hasError = !!error;

  const showCleanIcon = useMemo(() => !readOnly && !disabled && value, [value]);

  const handleTogglePasswordVisibility = (): void => {
    setPassowrdVisible((prevState) => {
      const _type = prevState ? 'password' : 'text';
      setInputType(_type);
      return !prevState;
    });
  };

  return (
    <UiSizeLayout width={width} height={height}>
      <div
        className={cn(
          styles.input,
          {
            [styles[`input_size__${size}`]]: size,
            [styles[`input_rightBlock_${height}`]]: rightBlock && height,
            [styles[`input_rightBlock_${iconPosition}`]]: rightBlock && iconPosition,
            [styles.input_error]: hasError,
          },
          className
        )}
      >
        {label && (
          <Typography color="gray-300" variant="body4">
            {label}
          </Typography>
        )}
        {/* {inputType === 'number' ? (
          <div className={styles.numberInput}>

            <input
              className={styles.numberInput__quantity}
              min={min}
              name={name}
              value={value}
              type="number"
              placeholder={placeholder}
              onChange={handleChange}
            />
            <div>

            <button onClick={() => handleIncrement(true)} />
            <button onClick={() => handleIncrement(false)} className="plus" />
            </div>
          </div>
        ) : ( */}
        <input
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          type={inputType}
          id={id || uuid()}
          disabled={disabled}
          readOnly={readOnly}
          style={{ padding: inputPadding, height: inputHeight }}
          {...rest}
        />
        {hasError && (
          <Typography color="error" variant="body4" className={styles.errorMessage}>
            {error}
          </Typography>
        )}

        <div
          className={cn({
            [styles.input__rightBlock]: true,
            [styles[`input__rightBlock_${height}`]]: height,
            [styles[`input__rightBlock_${iconPosition}`]]: iconPosition,
          })}
        >
          {showCleanIcon && (
            <div>
              {resetInputValue && (
                <SvgIcon pointer src={icons.close} color="#757B8C" onClick={() => resetInputValue(name)} />
              )}
            </div>
          )}
          {currency && (
            <div>
              <Typography color="gray-300" className={styles.input_currency}>
                {currency}
              </Typography>
            </div>
          )}
          {variant === 'withIcon' && (
            <div className={cn(styles.iconContainer)}>
              {icon && <SvgIcon pointer src={icons[icon]} color="#757B8C" />}
            </div>
          )}
          {type === 'password' && (
            <div className={styles.iconContainer} onClick={handleTogglePasswordVisibility}>
              <SvgIcon pointer src={passwordVisible ? icons.eyeIcon : icons.eyeCrossedIcon} color="#757B8C" />
            </div>
          )}
        </div>
      </div>
    </UiSizeLayout>
  );
};
