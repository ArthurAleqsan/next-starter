import cn from 'classnames';
import { FC, ReactNode } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import { icons } from '@/configs/icons';
import { UiILocatorsEnum } from '@/configs/ui-locators';

import { SvgIcon } from '@/components/general/SvgIcon';

import styles from './DropdownMenu.module.scss';

type Props = {
  onOutsideClick: (value?: any) => void;
  className?: string;
  button: ReactNode;
  open: boolean;
  items?: string[] | undefined;
  size?: 'lg' | 'md' | 'sm';
  handleSelect?: (option: string) => void;
  buttonClick?: () => void;
  children?: ReactNode;
  dropdown_list_position?: 'left' | 'right';
};

export const DropdownMenu: FC<Props> = ({
  onOutsideClick,
  className,
  button,
  open,
  size = 'md',
  items,
  handleSelect,
  buttonClick,
  children,
  dropdown_list_position = 'left',
}) => {
  const ref = useOnclickOutside(() => onOutsideClick(false));

  return (
    <div
      className={cn(
        styles.dropdownMenu,
        {
          [styles.dropdownMenu_open]: open,
          [styles[`dropdownMenu_size_${size}`]]: size,
        },
        className
      )}
    >
      <div className={styles.dropdownMenu__buttonWrapper}>
        {button}
        <div className={styles.dropdownMenu__buttonWrapper__icon}>
          <SvgIcon pointer src={icons.arrowDown} color="white" onClick={buttonClick} />
        </div>
      </div>

      {open && (
        <div
          className={cn(styles.dropdownMenu__list, {
            [styles[`dropdownMenu__list__${dropdown_list_position}`]]: dropdown_list_position,
          })}
          id={UiILocatorsEnum.DROPDOWN_MENU_LIST}
          ref={ref}
        >
          {items && handleSelect
            ? items.map((option, index: number) => (
                <div
                  key={`${option}_${index}`}
                  onClick={() => handleSelect(option)}
                  className={styles.dropdownMenu__list__item}
                >
                  {option}
                </div>
              ))
            : children}
        </div>
      )}
    </div>
  );
};
