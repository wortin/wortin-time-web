import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { ReportTimeLayOutData, TimeMenuItems } from '@/data/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={ReportTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
