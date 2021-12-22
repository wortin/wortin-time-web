import React from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import {
  ToDoViewButtonC,
  TodoViewButtonProps,
} from '@/components/todo/todo_view_buttion';
import { ListViewContentC } from '@/components/todo/list-view/list_view_content';
import { RouteChildrenProps } from 'react-router';

type ToDoContentProps = RouteChildrenProps & {};

interface ToDoContentState {}

export class ToDoContentC extends React.Component<
  ToDoContentProps,
  ToDoContentState
> {
  public constructor(props: ToDoContentProps) {
    super(props);
    this.state = {};
  }

  public render() {
    let Content: React.ComponentClass<any, any> = ListViewContentC;
    let path: string =
      this.props.match?.path == undefined ? '' : this.props.match?.path;
    ViewButtonProps.every((p, ind) => {
      if (path.startsWith(p.to)) {
        Content = ListContents[ind];
        return false;
      }
    });
    return (
      <div>
        <div>
          <ToDoViewButtonC {...ListViewButtonProps} />
          <ToDoViewButtonC {...FqViewButtonProps} />
          <ToDoViewButtonC {...CalViewButtonProps} />
          <ToDoViewButtonC {...AttViewButtonProps} />
        </div>
        <div style={ViewContentStyle}>
          <Content {...this.props} />
        </div>
      </div>
    );
  }
}

const ListViewButtonProps: TodoViewButtonProps = {
  icon: UnorderedListOutlined,
  text: '列表视图',
  primary: false,
  to: '/todo/list_view',
};
const FqViewButtonProps: TodoViewButtonProps = {
  icon: AppstoreOutlined,
  text: '四象限视图',
  primary: false,
  to: '/todo/fq_view',
};
const CalViewButtonProps: TodoViewButtonProps = {
  icon: CalendarOutlined,
  text: '日历视图',
  primary: false,
  to: '/todo/cal_view',
};
const AttViewButtonProps: TodoViewButtonProps = {
  icon: ClockCircleOutlined,
  text: '专注模式',
  primary: true,
  to: '/todo/att_view',
};

const ViewButtonProps: Array<TodoViewButtonProps> = [
  ListViewButtonProps,
  FqViewButtonProps,
  CalViewButtonProps,
  AttViewButtonProps,
];

const ListContents: Array<React.ComponentClass<any, any>> = [
  ListViewContentC,
  ListViewContentC,
  ListViewContentC,
  ListViewContentC,
];

const ViewContentStyle = {
  background: '#fff',
  minHeight: '380px',
  marginTop: '25px',
};
