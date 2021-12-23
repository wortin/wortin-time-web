import React from 'react';
import { TodayEdit } from '@/components/todo/list_view/today/edit';
import { TodayAct } from '@/components/todo/list_view/today/act';
import { Title } from '@/components/todo/list_view/common/title';

export const TodayItem: React.FC<{}> = ({}) => {
  return (
    <div className={'listViewContentSecondColDiv'}>
      <Title title={'今天'} />
      <TodayEdit />
      <TodayAct />
    </div>
  );
};
