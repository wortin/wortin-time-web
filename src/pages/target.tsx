import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { TargetTimeLayOutData, TimeMenuItems } from '@/data/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={TargetTimeLayOutData} menuItems={TimeMenuItems} />
  );
}