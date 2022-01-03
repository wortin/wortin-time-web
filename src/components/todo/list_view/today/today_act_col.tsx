import React from 'react';
import { RouteChildrenProps } from 'react-router';
import TodayCol from '@/components/todo/list_view/today/today_col';
import { Col, Row } from 'antd';
import { ActItem } from '@/components/todo/list_view/action/actitem';

export type TodayActionColProps = RouteChildrenProps & {};

export interface TodayActionColState {}

class TodayActionCol extends React.Component<
  TodayActionColProps,
  TodayActionColState
> {
  public constructor(props: TodayActionColProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <Row>
        <Col span={12}>
          <TodayCol {...this.props} />
        </Col>
        <Col span={12}>
          <ActItem />
        </Col>
      </Row>
    );
  }
}

export default TodayActionCol;
