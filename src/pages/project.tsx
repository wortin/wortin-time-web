import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { ProjectTimeLayOutData, TimeMenuItems } from '@/data/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={ProjectTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
