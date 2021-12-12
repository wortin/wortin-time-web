import { Col, Input, List, Row } from 'antd';
import React from 'react';

export const TriflesAct: React.FC<{}> = ({}) => {
  return (
    <div style={{ margin: '30px 20px 0 20px' }}>
      <Row>
        <Input
          placeholder="输入动作名，回车即可创建"
          bordered={false}
          style={{
            border: 'none',
            background: '#eee',
            padding: '5px 10px',
            width: '100%',
          }}
        />
      </Row>
      <Row>
        <List
          dataSource={[{}, {}]}
          style={{ width: '100%', marginTop: '10px' }}
          bordered={false}
          split={false}
          renderItem={(item) => (
            <List.Item>
              <Row style={{ width: '100%' }} align={'middle'}>
                <Col span={16}>
                  <Row>
                    <div>动作名X</div>
                  </Row>
                  <Row>
                    <div style={{ fontSize: '12px', color: '#9f9f9f' }}>
                      项目名X
                    </div>
                  </Row>
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
            </List.Item>
          )}
        />
      </Row>
    </div>
  );
};
