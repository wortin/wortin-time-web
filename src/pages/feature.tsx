import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { FeatureTimeLayOutData, TimeMenuItems } from '@/models/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={FeatureTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
