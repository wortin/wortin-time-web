import React from 'react';
import { Col, Row } from 'antd';

export const TodoMenu: React.FC<TodoMenuData> = (d) => {
  const isActive: boolean = d.isActive == undefined ? false : d.isActive;
  let Icon: React.ExoticComponent<any> = isActive ? d.activeIcon : d.icon;
  let color: string = isActive ? '#1890FE' : '#262626';
  return (
    <Row
      align={'middle'}
      style={{ marginTop: '20px', marginBottom: '10px', color: color }}
    >
      <Col span={16}>
        <Icon style={{ marginRight: '10px', marginLeft: '20px' }} />
        {d.text}
      </Col>
      <Col span={8}>
        <div style={{ float: 'right', marginRight: '20px' }}>{d.count}</div>
      </Col>
    </Row>
  );
};

export interface TodoMenuData {
  icon: React.ExoticComponent<any>;
  activeIcon: React.ExoticComponent<any>;
  text: string;
  count: string;
  isActive: boolean | undefined;
}
