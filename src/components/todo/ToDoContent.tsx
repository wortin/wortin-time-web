import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { TodoTrig, TodoView } from '@/components/todo/view';
import { ListView } from '@/components/todo/list-view/ListView';
import { FqView } from '@/components/todo/fq-view/FqView';
import { CalView } from '@/components/todo/cal-view/CalView';
import { AttView } from '@/components/todo/att-view/AttView';

export const ToDoContent: React.FC<{}> = ({}) => {
  const [cur, setCur] = useState<number>(0);
  let Content: React.FC<{}> = ListContents[cur];
  return (
    <div>
      <div>
        <TodoView
          icon={UnorderedListOutlined}
          text={'列表视图'}
          ind={0}
          onClick={setCur}
        />
        <TodoView
          icon={AppstoreOutlined}
          text={'四象限视图'}
          ind={1}
          onClick={setCur}
        />
        <TodoView
          icon={CalendarOutlined}
          text={'日历视图'}
          ind={2}
          onClick={setCur}
        />
        <TodoTrig
          icon={ClockCircleOutlined}
          text={'专注模式'}
          ind={3}
          onClick={setCur}
        />
      </div>
      <div
        style={{
          background: '#fff',
          minHeight: '380px',
          marginTop: '25px',
        }}
      >
        <Content />
      </div>
    </div>
  );
};

const ListContents: Array<React.FC> = [ListView, FqView, CalView, AttView];
