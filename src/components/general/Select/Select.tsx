import cn from 'classnames';
import { FC, useMemo } from 'react';
import ReactSelect, { MultiValue, Options, SingleValue } from 'react-select';
import { v4 as uuid } from 'uuid';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';
import { UiSizeLayout } from '@/components/layouts/UiSizeLayout';

import styles from './Select.module.scss';
import { Typography } from '../Typography';

import { UiElementHeightType, UiElementWidthType } from '@/types/ui';

export type SelectOptionType = {
  label: string;
  value: number;
};

type Props = {
  getOptionValue?: (option: SelectOptionType) => string;
  getOptionLabel?: (option: SelectOptionType) => string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange: (option: SingleValue<SelectOptionType> | MultiValue<SelectOptionType>) => void;
  isMulti?: boolean;
  height?: UiElementHeightType;
  width?: UiElementWidthType;
  error?: boolean;
  value: SingleValue<SelectOptionType> | MultiValue<SelectOptionType> | null;
  list: Options<SelectOptionType>;
  id?: string;
  label?: string;
  size?: 'lg' | 'md' | 'auto';
  resetValue?: () => void;
  containerClassName?: string;
  selectHeight?: 'lg' | 'md';
  iconPosition?: 'lg' | 'md' | 'left';
};

const iconPositonHashMap = {
  lg: '440px',
  md: '290px',
  left: '60%',
};

export const Select: FC<Props> = ({
  containerClassName,
  getOptionValue,
  getOptionLabel,
  placeholder = 'Start typing...',
  className,
  disabled,
  onChange,
  isMulti = false,
  height = 'md',
  error,
  value,
  width,
  list,
  label,
  size = 'auto',
  id,
  resetValue,
  selectHeight = 'md',
  iconPosition = 'left',
}) => {
  const leftPosition = useMemo(() => iconPositonHashMap[iconPosition], [iconPosition]);
  return (
    <UiSizeLayout width={width} height={height} className={containerClassName}>
      {label && (
        <Typography color="gray-300" variant="body4">
          {label}
        </Typography>
      )}
      <div
        className={cn(styles.select_container, {
          [styles[`select_container__${selectHeight}`]]: selectHeight,
        })}
      >
        <ReactSelect
          classNamePrefix="select"
          getOptionValue={getOptionValue}
          getOptionLabel={getOptionLabel}
          isSearchable={!disabled}
          placeholder={placeholder}
          instanceId={id}
          className={cn(
            styles.selectWrapper,
            {
              [styles[`selectWrapper__rightBlock_${height}`]]: height,
              [styles[`selectWrapper_size__${size}`]]: size,
              [styles.selectWrapper_disabled]: disabled,
              [styles.selectWrapper_error]: error,
            },
            className
          )}
          onChange={onChange}
          isMulti={isMulti}
          options={list}
          value={value}
          id={id || uuid()}
        />
        {!!value && !isMulti && (
          <div style={{ position: 'absolute', left: leftPosition, top: '20%' }}>
            {resetValue && <SvgIcon pointer src={icons.close} color="#CCCCCC" onClick={resetValue} />}
          </div>
        )}
      </div>
    </UiSizeLayout>
  );
};
