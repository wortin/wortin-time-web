import { Col, Input, List, Row } from 'antd';
import React from 'react';

export const ProAct: React.FC<{}> = ({}) => {
  return (
    <div style={{ margin: '0px 20px 0 20px' }}>
      <Row>
        <List
          dataSource={[{}, {}]}
          style={{
            width: '100%',
            marginTop: '10px',
            borderTop: '0.5px solid #ddd',
          }}
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
                      2021/12/4
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
