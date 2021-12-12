import React from 'react';
import { TodayEdit } from '@/components/todo/list-view/today/edit';
import { TodayAct } from '@/components/todo/list-view/today/act';
import { Title } from '@/components/todo/list-view/common/title';

export const TodayItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'今天'} />
      <TodayEdit />
      <TodayAct />
    </div>
  );
};
