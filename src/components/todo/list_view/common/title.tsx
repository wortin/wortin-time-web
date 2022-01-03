import React, { MouseEventHandler } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Col, Row } from 'antd';
import './title.less';

export type TitleProps = RouteChildrenProps & {
  title: string;
  id: number;
  onDoneClick: MouseEventHandler;
  onDeletedClick: MouseEventHandler;
};

export interface TitleState {}

class Title extends React.Component<TitleProps, TitleState> {
  public constructor(props: TitleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={'titleDiv'}>
        <Row align={'middle'}>
          <Col span={16}>
            <div className={'titleText'}>{this.props.title}</div>
          </Col>
          <Col span={8}>
            <div className={'done'} onClick={this.props.onDoneClick}>
              完成
            </div>
            <div className={'delete'} onClick={this.props.onDeletedClick}>
              删除
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Title;
