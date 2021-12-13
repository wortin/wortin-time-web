import React from 'react';
import { Col, Row, Select, Tag } from 'antd';

export const DoneEdit: React.FC<{}> = ({}) => {
  return (
    <div style={{ color: '#87898a', margin: '10px 20px' }}>
      <Row style={{ fontSize: '10px' }}>你可以根据标签筛选动作：</Row>
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
