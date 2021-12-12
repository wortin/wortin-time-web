import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TodoMenu } from '@/components/todo/list-view/menu';
import {
  BuildOutlined,
  BuildTwoTone,
  CheckCircleOutlined,
  CheckCircleTwoTone,
  DeleteOutlined,
  DeleteTwoTone,
  EyeOutlined,
  EyeTwoTone,
} from '@ant-design/icons';
import { ListColl } from '@/components/todo/list-view/listcoll';
import { TodayItem } from '@/components/todo/list-view/today/item';
import { ActItem } from '@/components/todo/list-view/action/actitem';
import { DoneItem } from '@/components/todo/list-view/done/item';
import { DeletedItem } from '@/components/todo/list-view/deleted/item';
import { TriflesItem } from '@/components/todo/list-view/trifles/item';
import { ProItem } from '@/components/todo/list-view/project/proitem';

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
    <Row style={{ width: '100%', userSelect: 'none' }}>
      <Col span={6}>
        <div onClick={() => cli(0)} style={{ cursor: 'pointer' }}>
          <TodoMenu
            activeIcon={EyeTwoTone}
            icon={EyeOutlined}
            text={'今天'}
            count={'0/3'}
            isActive={activeMap.get(0)}
          />
        </div>
        <div onClick={() => cli(1)} style={{ cursor: 'pointer' }}>
          <TodoMenu
            activeIcon={BuildTwoTone}
            icon={BuildOutlined}
            text={'琐事'}
            count={'0/4'}
            isActive={activeMap.get(1)}
          />
        </div>
        <div onClick={() => cli(-1)}>
          <ListColl />
        </div>
        <div onClick={() => cli(2)} style={{ cursor: 'pointer' }}>
          <TodoMenu
            activeIcon={CheckCircleTwoTone}
            icon={CheckCircleOutlined}
            text={'已完成'}
            count={'3'}
            isActive={activeMap.get(2)}
          />
        </div>
        <div onClick={() => cli(3)} style={{ cursor: 'pointer' }}>
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
        <Item />
      </Col>
      <Col span={9}>
        <ActItem />
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
