import React from 'react';
import { ActTitle } from '@/components/todo/list_view/action/acttile';
import { ActEdit } from '@/components/todo/list_view/action/actedit';
import { ActAct } from '@/components/todo/list_view/action/actact';

export const ActItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <ActTitle />
      <ActEdit />
      <ActAct />
    </div>
  );
};
