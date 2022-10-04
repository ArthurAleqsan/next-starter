import { FC } from 'react';

import { LandingLayout } from '@/components/layouts/LandingLayout';

import { HomeSection } from './HomeSection';

export const LandingView: FC = () => {
  return (
    <LandingLayout>
      <HomeSection />
    </LandingLayout>
  );
};
