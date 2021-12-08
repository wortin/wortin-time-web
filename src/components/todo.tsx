import React from 'react';
import { Button, Col, Divider, Row, Tag, Timeline } from 'antd';
import { TimeLineItems } from '@/data/timeline';
import { ActionTags } from '@/data/action-tag';

export const ToDoContent: React.FC<{}> = ({}) => {
  return (
    <Row gutter={64}>
      <Col span={6}>
        {/*时间轴上只会出现 固定时间的动作 当前正在做的动作 即时动作 已经完成的动作*/}
        <Timeline mode={'left'}>
          {TimeLineItems.map(({ time }) => {
            return (
              <Timeline.Item label={time}>
                <Row>dadddddddddddadddddddddddadddddddddd</Row>
                <Row>bbb</Row>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
      <Col span={18}>
        {/*按标签筛选*/}
        {/*四象限*/}
        <Row>
          <Divider orientation={'left'}>筛选</Divider>
          <div>
            {ActionTags.map((t) => {
              return <Tag color={t.color}>{t.name}</Tag>;
            })}
          </div>
        </Row>
        <Row>
          <Col span={9}>
            <div>重要紧急</div>
          </Col>
          <Col span={9}>
            <div>重要不紧急</div>
          </Col>
        </Row>
        <Row>
          <Col span={9}>不重要不紧急</Col>
          <Col span={9}>不重要不紧急</Col>
        </Row>
      </Col>
    </Row>
  );
};
