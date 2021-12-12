import React from 'react';
import { TriflesAct } from '@/components/todo/list-view/trifles/act';
import { TriflesEdit } from '@/components/todo/list-view/trifles/edit';
import { Title } from '@/components/todo/list-view/common/title';

export const TriflesItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <Title title={'琐事'} />
      <TriflesEdit />
      <TriflesAct />
    </div>
  );
};