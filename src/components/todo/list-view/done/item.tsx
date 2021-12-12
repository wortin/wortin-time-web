import React from 'react';
import { DoneAct } from '@/components/todo/list-view/done/act';
import { DoneEdit } from '@/components/todo/list-view/done/edit';
import { Title } from '@/components/todo/list-view/common/title';

export const DoneItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'已完成'} />
      <DoneEdit />
      <DoneAct />
    </div>
  );
};
