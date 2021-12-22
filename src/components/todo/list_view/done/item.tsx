import React from 'react';
import { DoneAct } from '@/components/todo/list_view/done/act';
import { DoneEdit } from '@/components/todo/list_view/done/edit';
import { Title } from '@/components/todo/list_view/common/title';

export const DoneItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'已完成'} />
      <DoneEdit />
      <DoneAct />
    </div>
  );
};
