import { UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';

export const TodoView: React.FC<TodoViewData> = (d) => {
  return (
    <Button
      icon={<d.icon />}
      style={{ border: 'none', marginRight: '24px' }}
      onClick={() => {
        d.onClick(d.ind);
      }}
    >
      {d.text}
    </Button>
  );
};

export interface TodoViewData {
  icon: React.ExoticComponent<any>;
  text: string;
  onClick: Dispatch<SetStateAction<number>>;
  ind: number;
}

export const TodoTrig: React.FC<TodoViewData> = (d) => {
  return (
    <Button
      type="primary"
      icon={<d.icon />}
      style={{ float: 'right', marginLeft: '24px' }}
      onClick={() => {
        d.onClick(d.ind);
      }}
    >
      {d.text}
    </Button>
  );
};
