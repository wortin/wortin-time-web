import React from 'react';
import { Row } from 'antd';

export const Title: React.FC<ActTitleData> = (d) => {
  return (
    <Row style={{ margin: '20px 20px' }} align={'middle'}>
      <div
        style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}
      >
        {d.title}
      </div>
    </Row>
  );
};

export interface ActTitleData {
  title: string;
}
