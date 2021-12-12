import React from 'react';
import { DeletedAct } from '@/components/todo/list-view/deleted/act';
import { DeletedEdit } from '@/components/todo/list-view/deleted/edit';
import { Title } from '@/components/todo/list-view/common/title';

export const DeletedItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'回收站'} />
      <DeletedEdit />
      <DeletedAct />
    </div>
  );
};
