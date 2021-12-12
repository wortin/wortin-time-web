import React from 'react';
import { ActTitle } from '@/components/todo/list-view/action/acttile';
import { ActEdit } from '@/components/todo/list-view/action/actedit';
import { ActAct } from '@/components/todo/list-view/action/actact';

export const ActItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <ActTitle />
      <ActEdit />
      <ActAct />
    </div>
  );
};
