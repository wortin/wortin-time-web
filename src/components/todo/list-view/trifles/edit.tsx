import React from 'react';
import { Col, Input, Row, Select, Tag } from 'antd';

export const TriflesEdit: React.FC<{}> = ({}) => {
  return (
    <div style={{ color: '#87898a', margin: '10px 20px' }}>
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
      <Row style={{ fontSize: '10px', marginTop: '30px' }}>
        你可以根据标签筛选动作：
      </Row>
      <Row align={'middle'} style={{ margin: '10px 0' }}>
        <Col span={24}>
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={[]}
            style={{ width: '100%' }}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

function tagRender(props: any) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}
