import React from 'react';
import { Col, Row } from 'antd';

export const ActTitle: React.FC<{}> = ({}) => {
  return (
    <Row style={{ margin: '20px 20px' }} align={'middle'}>
      <Col span={16}>
        <div
          style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}
        >
          动作名X
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            float: 'right',
            marginLeft: '10px',
            fontSize: '10px',
            color: '#1890ff',
          }}
        >
          完成
        </div>
        <div
          style={{
            float: 'right',
            marginLeft: '10px',
            fontSize: '10px',
            color: '#9f9f9f',
          }}
        >
          删除
        </div>
      </Col>
    </Row>
  );
};
