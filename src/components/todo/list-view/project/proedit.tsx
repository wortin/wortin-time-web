import { Col, DatePicker, Input, Row, Select } from 'antd';
import React from 'react';
import TextArea from 'antd/es/input/TextArea';

const { Option } = Select;

export const ProEdit: React.FC<{}> = ({}) => {
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
      <Row style={{ margin: '10px 0' }} />
      <Row align={'middle'} style={{ margin: '10px 0' }}>
        <Col span={6}>关联目标</Col>
        <Col span={18}>
          <Select
            placeholder="请选择一个目标"
            size={'small'}
            style={{ width: '100%' }}
            bordered={false}
          >
            <Option value="jack">Jack</Option>
          </Select>
        </Col>
      </Row>
      <Row align={'middle'} style={{ margin: '10px 0' }}>
        <Col span={6}>计划时间</Col>
        <Col span={18}>
          <DatePicker.RangePicker
            size={'small'}
            style={{ width: '100%' }}
            bordered={false}
          />
        </Col>
      </Row>
      <Row align={'top'} style={{ marginTop: '10px' }}>
        <Col span={6}>项目详情</Col>
        <Col span={18}>
          <TextArea
            placeholder={'请输入项目信息'}
            autoSize={{ minRows: 1, maxRows: 10 }}
            style={{ width: '100%', border: 'none', padding: '0 8px' }}
          />
        </Col>
      </Row>
    </div>
  );
};

const dateFormat = 'YYYY/MM/DD';
