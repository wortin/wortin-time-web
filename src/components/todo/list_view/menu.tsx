import React from 'react';
import { Col, Row } from 'antd';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'umi';
import './menu.less';

export type ListViewContentMenuProps = RouteChildrenProps & {
  icon: React.ExoticComponent<any>;
  activeIcon: React.ExoticComponent<any>;
  text: string;
  count: string;
  to: string;
};

interface ListViewContentMenuState {}

export class ListViewContentMenu extends React.Component<
  ListViewContentMenuProps,
  ListViewContentMenuState
> {
  public constructor(props: ListViewContentMenuProps) {
    super(props);
  }

  public render() {
    let path: string =
      this.props.match?.path == undefined ? '' : this.props.match?.path;
    const isActive: boolean = path.startsWith(this.props.to);
    let Icon: React.ExoticComponent<any> = isActive
      ? this.props.activeIcon
      : this.props.icon;
    let color: string = isActive ? '#1890FE' : '#262626';
    return (
      <Link to={this.props.to}>
        <Row className={'menuRow'} align={'middle'} style={{ color: color }}>
          <Col span={16}>
            <div className={'menuIconCol'}>
              <Icon />
              {this.props.text}
            </div>
          </Col>
          <Col span={8}>
            <div className={'menuCount'}>{this.props.count}</div>
          </Col>
        </Row>
      </Link>
    );
  }
}
