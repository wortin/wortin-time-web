import React from 'react';
import { Col, DatePicker, Input, Row, Select, Tag } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styles from './actdit.css';

export const ActEdit: React.FC<{}> = ({}) => {
  return (
    <div style={{ color: '#87898a', margin: '10px 20px' }}>
      <Row>
        <Input
          placeholder="输入子动作名，回车即可创建"
          bordered={false}
          style={{
            border: 'none',
            background: '#eee',
            padding: '5px 10px',
            width: '100%',
          }}
        />
      </Row>
      <Row style={{ margin: '10px 0' }} />
      <Row align={'middle'} style={{ margin: '10px 0', height: '28px' }}>
        <Col span={6}>标签</Col>
        <Col span={18}>
          <Select
            mode="tags"
            style={{ border: 'none', width: '100%' }}
            placeholder="选择或输入新标签回车后创建"
            onChange={() => {}}
          >
            size={'small'}
            bordered={false}
            {[]}
          </Select>
        </Col>
      </Row>
      <Row align={'middle'} style={{ margin: '20px 0', height: '28px' }}>
        <Col span={6}>计划时间</Col>
        <Col span={18}>
          <DatePicker
            size={'small'}
            style={{ width: '100%' }}
            bordered={false}
          />
        </Col>
      </Row>
      <Row align={'top'} style={{ marginTop: '10px', minHeight: '28px' }}>
        <Col span={6}>动作详情</Col>
        <Col span={18}>
          <TextArea
            placeholder={'请输入动作信息'}
            autoSize={{ minRows: 1, maxRows: 10 }}
            style={{ width: '100%', border: 'none', padding: '0 8px' }}
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
