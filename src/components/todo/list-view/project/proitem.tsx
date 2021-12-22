import React from 'react';
import { ProTitle } from '@/components/todo/list-view/project/protitle';
import { ProEdit } from '@/components/todo/list-view/project/proedit';
import { ProAct } from '@/components/todo/list-view/project/proact';
import { ItemData } from '@/components/todo/list-view/ListView';

export const ProItem: React.FC<{}> = () => {
  return (
    <div>
      <ProTitle name={'Pro'} />
      <ProEdit />
      <ProAct />
    </div>
  );
};
