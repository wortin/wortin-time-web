import React, {useState} from 'react';
import {RouteChildrenProps} from 'react-router';
import {Col, Row} from 'antd';
import {ListViewContentMenu, TodoMenu,} from '@/components/todo/list_view/menu';
import {BuildOutlined, BuildTwoTone, CheckCircleOutlined, CheckCircleTwoTone, ProjectTwoTone, ProjectOutlined, DeleteOutlined, DeleteTwoTone, EyeOutlined, EyeTwoTone,} from '@ant-design/icons';
import {ListColl} from '@/components/todo/list_view/listcoll';
import {TodayItem} from '@/components/todo/list_view/today/item';
import {ActItem} from '@/components/todo/list_view/action/actitem';
import {DoneItem} from '@/components/todo/list_view/done/item';
import {DeletedItem} from '@/components/todo/list_view/deleted/item';
import {TriflesItem} from '@/components/todo/list_view/trifles/item';
import {ProItem} from '@/components/todo/list_view/project/proitem';

type ListViewContentProps = RouteChildrenProps & {};

interface ListViewContentState {
}

export class ListViewContentC extends React.Component<ListViewContentProps,
  ListViewContentState> {
  public constructor(props: ListViewContentProps) {
    super(props);
  }

  public render() {
    // 根据当前path，例如 /todo/list_view/today /todo/list_view/trifles /todo/list_view/done /todo/list_view/deleted
    // 判断显示的内容

    return (
      <Row
        className={'contentWithMinHeight'}
        style={{width: '100%', userSelect: 'none'}}
      >
        <Col span={6}>
          <ListViewContentMenu
            {...this.props}
            {...TodayTodoMenuProps}
            count={''}
          />
          <ListViewContentMenu
            {...this.props}
            {...ProjTodoMenuProps}
            count={''}
          />
          <ListViewContentMenu
            {...this.props}
            {...TriflesTodoMenuProps}
            count={''}
          />
          <ListViewContentMenu
            {...this.props}
            {...DoneTodoMenuProps}
            count={''}
          />
          <ListViewContentMenu
            {...this.props}
            {...DeleteTodoMenuProps}
            count={''}
          />
        </Col>
        <Col
          span={18}
          style={{
            minHeight: '380px',
            borderLeft: '0.5px solid #ddd',
          }}
        ></Col>
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

export const ListView: React.FC<{}> = () => {
  const [activeMap, setActiveMap] = useState<Map<number, boolean>>(
    new Map([[0, true]]),
  );
  const [cur, setCur] = useState<number>(0);
  const cli = (ind: number) => {
    setActiveMap(new Map([[ind, true]]));
    setCur(ind);
  };
  const Item = cur == -1 ? ProItem : ListContents[cur];
  return (
    <Row
      className={'contentWithMinHeight'}
      style={{width: '100%', userSelect: 'none'}}
    >
      <Col span={6}>
        <div onClick={() => cli(0)} style={{cursor: 'pointer'}}>
          <TodoMenu
            activeIcon={EyeTwoTone}
            icon={EyeOutlined}
            text={'今天'}
            count={'0/3'}
            isActive={activeMap.get(0)}
          />
        </div>
        <div onClick={() => cli(1)} style={{cursor: 'pointer'}}>
          <TodoMenu
            activeIcon={BuildTwoTone}
            icon={BuildOutlined}
            text={'琐事'}
            count={'0/4'}
            isActive={activeMap.get(1)}
          />
        </div>
        <div>
          <ListColl/>
        </div>
        <div onClick={() => cli(2)} style={{cursor: 'pointer'}}>
          <TodoMenu
            activeIcon={CheckCircleTwoTone}
            icon={CheckCircleOutlined}
            text={'已完成'}
            count={'3'}
            isActive={activeMap.get(2)}
          />
        </div>
        <div onClick={() => cli(3)} style={{cursor: 'pointer'}}>
          <TodoMenu
            activeIcon={DeleteTwoTone}
            icon={DeleteOutlined}
            text={'回收站'}
            count={'5'}
            isActive={activeMap.get(3)}
          />
        </div>
      </Col>
      <Col
        span={9}
        style={{
          minHeight: '380px',
          borderLeft: '0.5px solid #ddd',
          borderRight: '0.5px solid #ddd',
        }}
      >
        <Item/>
      </Col>
      <Col span={9}>
        <ActItem/>
      </Col>
    </Row>
  );
};

const ListContents: Array<React.FC> = [
  TodayItem,
  TriflesItem,
  DoneItem,
  DeletedItem,
];
