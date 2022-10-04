import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

import { icons } from '@/configs/icons';

import { SvgIcon } from '@/components/general/SvgIcon';
// import { NotificationsView } from '@/components/views/NotificationsView';

import { LogoutModal } from './LogoutModal';
import menuNavigations from './menuNavigations.json';
import styles from './Sidebar.module.scss';

type Props = {
  className?: string;
  id?: string;
};

export const Sidebar: FC<Props> = ({ className, id }) => {
  const { t } = useTranslation('common');
  const { pathname, push } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);

  return (
    <div className={cn(styles.sidebar, className, { [styles.sidebar_active]: isActive })} id={id}>
      <div
        className={cn(styles.icon_content, {
          [styles.icon_content_active]: isActive,
          [styles.icon_content_notify]: isOpenNotification,
        })}
      >
        {!isActive && (
          <Link href="/storybook" passHref>
            <SvgIcon pointer src={icons.clrt_icon} className={styles.logo} />
          </Link>
        )}
        <SvgIcon
          pointer
          rotate={isActive ? '180' : '360'}
          src={icons.sidebarArrow}
          className={styles.sidebar_arrow}
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <div className={cn(styles.menu, { [styles.menu_notify]: isOpenNotification })}>
        <div>
          {menuNavigations.map(({ title, icon, activeIcon, route }) => {
            const isNotification = route.includes('notification');
            const isActiveRoute = isOpenNotification ? isNotification : pathname.includes(route);
            return (
              <div
                key={title}
                onClick={() => {
                  if (isNotification) {
                    setIsOpenNotification(true);
                  } else {
                    push(route);
                    setIsOpenNotification(false);
                  }
                }}
              >
                <div className={cn(styles.menu_item, { [styles.menu_item_active]: isActiveRoute })}>
                  <SvgIcon pointer src={icons[isActiveRoute ? activeIcon : icon]} className={styles.menu_icon} />
                  {!isActive && (
                    <span className={cn(styles.menu_title, { [styles.menu_title_active]: isActiveRoute })}>
                      {t(title)}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.menu_item} onClick={() => setIsOpenLogout(true)}>
          <SvgIcon pointer src={icons.logout} className={styles.menu_icon} />
          {!isActive && <span className={styles.menu_title}>{t('pages.logout')}</span>}
        </div>
      </div>
      {isOpenLogout && <LogoutModal onSubmit={() => setIsOpenLogout(false)} onCancel={() => setIsOpenLogout(false)} />}
      {/* {isOpenNotification && <NotificationsView isOpen={!isActive} onClose={() => setIsOpenNotification(false)} />} */}
    </div>
  );
};
