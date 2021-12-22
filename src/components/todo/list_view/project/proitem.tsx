import React from 'react';
import { ProTitle } from '@/components/todo/list_view/project/protitle';
import { ProEdit } from '@/components/todo/list_view/project/proedit';
import { ProAct } from '@/components/todo/list_view/project/proact';
import { ItemData } from '@/components/todo/list_view/ListView';

export const ProItem: React.FC<{}> = () => {
  return (
    <div>
      <ProTitle name={'Pro'} />
      <ProEdit />
      <ProAct />
    </div>
  );
};
