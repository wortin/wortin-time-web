import React from 'react';
import { DeletedAct } from '@/components/todo/list_view/deleted/act';
import { DeletedEdit } from '@/components/todo/list_view/deleted/edit';
import { Title } from '@/components/todo/list_view/common/title';

export const DeletedItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'回收站'} />
      <DeletedEdit />
      <DeletedAct />
    </div>
  );
};
