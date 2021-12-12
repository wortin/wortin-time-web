import React from 'react';
import { ProTitle } from '@/components/todo/list-view/project/protitle';
import { ProEdit } from '@/components/todo/list-view/project/proedit';
import { ProAct } from '@/components/todo/list-view/project/proact';

export const ProItem: React.FC<{}> = ({}) => {
  return (
    <div>
      <ProTitle />
      <ProEdit />
      <ProAct />
    </div>
  );
};
