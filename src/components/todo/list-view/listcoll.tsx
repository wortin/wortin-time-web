import React from 'react';
import { Collapse, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const ListColl: React.FC<{}> = ({}) => {
  return (
    <Collapse
      defaultActiveKey={['1']}
      ghost
      style={{
        margin: '0 5px',
        borderTop: '0.5px solid #ddd',
        borderBottom: '0.5px solid #ddd',
      }}
    >
      <Collapse.Panel header={'项目'} key={'1'} extra={'0/5'}>
        <div style={{ marginBottom: '20px' }}>
          <Input
            placeholder="输入项目名，回车即可创建"
            bordered={false}
            style={{
              border: 'none',
              background: '#eee',
              padding: '5px 10px',
              width: '100%',
            }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          项目一 <div style={{ float: 'right' }}>3/10</div>
        </div>
        <div style={{ marginTop: '20px' }}>
          项目二 <div style={{ float: 'right' }}>3/10</div>
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};

const createProject = () => {
  console.log('create project');
};
