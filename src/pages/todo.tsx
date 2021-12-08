import React from 'react';
import { TimeLayout } from '@/components/timelayout';
import { TimeMenuItems, ToDoTimeLayOutData } from '@/models/timelayout';

export default function Page() {
  return (
    <TimeLayout activeItem={ToDoTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
