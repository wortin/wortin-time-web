import React from 'react';
import { RouteChildrenProps } from 'react-router';
import emptyImg from '@/images/empty_data.svg';
import './data_empty.less';
import { Row } from 'antd';

export type DataEmptyProps = RouteChildrenProps & {
  text: string;
};

export interface DataEmptyState {}

class DataEmpty extends React.Component<DataEmptyProps, DataEmptyState> {
  public constructor(props: DataEmptyProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Row justify={'center'}>
          <div className={'emptyDataImg'}>
            <img src={emptyImg} />
          </div>
        </Row>
        <Row justify={'center'}>
          <div className={'emptyDataText'}>{this.props.text}</div>
        </Row>
      </div>
    );
  }
}

export default DataEmpty;
