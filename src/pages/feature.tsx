import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { FeatureTimeLayOutData, TimeMenuItems } from '@/data/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={FeatureTimeLayOutData} menuItems={TimeMenuItems} />
  );
}