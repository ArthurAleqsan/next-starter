import { AnyAction } from '@reduxjs/toolkit';
import cn from 'classnames';
import noop from 'lodash/noop';
import { CSSProperties, FC, ReactChild, ReactNode } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';
import { Typography } from '@/components/general/Typography';

import styles from './Button.module.scss';
import { Loader } from '../Loader';

import { UiElementHeightType, UiElementWidthType } from '@/types/ui';

type Props = {
  fontWeight?: 'default' | 'bold';
  uppercase?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | AnyAction | undefined | string;
  children: ReactChild | ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  height?: UiElementHeightType;
  width?: UiElementWidthType;
  color?: 'primary' | 'secondary' | 'alert' | 'none' | 'transparent';
  style?: CSSProperties;
  type?: 'button' | 'submit';
  size?: 'lg' | 'md' | 'sm' | 'xsm';
  id?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconOrientation?: 'left' | 'right';
  minWidth?: boolean;
};
const iconColors = {
  primary: 'white',
  secondary: 'main',
  none: 'main',
};
export const Button: FC<Props> = ({
  fontWeight = 'default',
  uppercase,
  className,
  disabled,
  children,
  onClick,
  variant = 'contained',
  loading,
  height,
  width,
  style,
  color = 'primary',
  type = 'button',
  size = 'md',
  id = '',
  icon,
  iconPosition = 'left',
  iconOrientation,
  minWidth = true,
}) => {
  const iconColor: string = iconColors[color];
  return (
    <button
      id={id}
      className={cn(
        styles.button,
        {
          [styles[`button_fontWeight_${fontWeight}`]]: fontWeight,
          [styles[`button_variant_${variant}`]]: variant,
          [styles[`button_padding_${height}`]]: height && width === 'content',
          [styles[`button_color_${color}`]]: color,
          [styles[`button_size_${size}`]]: size,
          [styles.button_disabled]: disabled,
          [styles.button_loading]: loading,
          [styles.button_minWidth]: !minWidth,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={loading || disabled ? noop : onClick}
      style={style}
      type={type}
    >
      <div className={styles.button__content}>
        <Typography
          uppercase={uppercase}
          variant="inherit"
          color="inherit"
          display="flex"
          className={cn(styles.button__content__typography, {
            [styles[`button__content__typography__orientation_${iconOrientation}`]]:
              !!iconOrientation && iconOrientation,
          })}
        >
          <>
            {icon && iconPosition === 'left' && (
              <div
                className={cn('flexible vertical jBetween aCenter pAbsolute', styles.button__icon)}
                style={{ left: '0.55rem' }}
              >
                <SvgIcon pointer src={icons[icon]} color={iconColor} />
              </div>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <div className="flexible vertical jBetween aCenter pAbsolute" style={{ right: '0.55rem' }}>
                <SvgIcon pointer src={icons[icon]} color={iconColor} />
              </div>
            )}
            {loading && (
              <div className="flexible vertical jBetween aCenter" style={{ marginLeft: '0.55rem' }}>
                <Loader />
              </div>
            )}
          </>
        </Typography>
      </div>
    </button>
  );
};
