import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Col, Row } from 'antd';
import { ListViewContentMenu } from '@/components/todo/list_view/menu';
import {
  BuildOutlined,
  BuildTwoTone,
  CheckCircleOutlined,
  CheckCircleTwoTone,
  DeleteOutlined,
  DeleteTwoTone,
  EyeOutlined,
  EyeTwoTone,
  ProjectOutlined,
  ProjectTwoTone,
} from '@ant-design/icons';
import { TodayItem } from '@/components/todo/list_view/today/item';
import { DoneItem } from '@/components/todo/list_view/done/item';
import { DeletedItem } from '@/components/todo/list_view/deleted/item';
import { TriflesItem } from '@/components/todo/list_view/trifles/item';
import { ProItem } from '@/components/todo/list_view/project/proitem';
import './list_view_content.less';
import MenuListColl from '@/components/todo/list_view/menu_list_coll';

type ListViewContentProps = RouteChildrenProps & {};

interface ListViewContentState {}

export class ListViewContentC extends React.Component<
  ListViewContentProps,
  ListViewContentState
> {
  public constructor(props: ListViewContentProps) {
    super(props);
    this.state = {};
  }

  public render() {
    // 根据当前path，例如 /todo/list_view/today /todo/list_view/trifles /todo/list_view/done /todo/list_view/deleted
    // 判断显示的内容
    return (
      <Row className={'listViewContent'}>
        <Col span={6}>
          <ListViewContentMenu
            {...this.props}
            {...TodayTodoMenuProps}
            count={'0/3'}
          />
          <ListViewContentMenu
            {...this.props}
            {...TriflesTodoMenuProps}
            count={'0/3'}
          />
          <MenuListColl {...this.props} />
          <ListViewContentMenu
            {...this.props}
            {...DoneTodoMenuProps}
            count={'0/3'}
          />
          <ListViewContentMenu
            {...this.props}
            {...DeleteTodoMenuProps}
            count={'0/3'}
          />
        </Col>
        <Col span={18} className={'listViewContentSecondCol'}>
          <ProItem />
        </Col>
      </Row>
    );
  }
}

const TodayTodoMenuProps = {
  activeIcon: EyeTwoTone,
  icon: EyeOutlined,
  text: '今天',
  to: '/todo/list_view/today',
};
const ProjTodoMenuProps = {
  activeIcon: ProjectTwoTone,
  icon: ProjectOutlined,
  text: '项目',
  to: '/todo/list_view/project',
};
const TriflesTodoMenuProps = {
  activeIcon: BuildTwoTone,
  icon: BuildOutlined,
  text: '琐事',
  to: '/todo/list_view/trifles',
};
const DoneTodoMenuProps = {
  activeIcon: CheckCircleTwoTone,
  icon: CheckCircleOutlined,
  text: '已完成',
  to: '/todo/list_view/done',
};
const DeleteTodoMenuProps = {
  activeIcon: DeleteTwoTone,
  icon: DeleteOutlined,
  text: '回收站',
  to: '/todo/list_view/deleted',
};

const ListContents: Array<React.FC> = [
  TodayItem,
  TriflesItem,
  DoneItem,
  DeletedItem,
];
