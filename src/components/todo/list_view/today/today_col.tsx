import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { TodayEdit } from '@/components/todo/list_view/today/edit';
import { TodayAct } from '@/components/todo/list_view/today/act';
import Title from '@/components/todo/list_view/common/title';

export type TodayColProps = RouteChildrenProps & {};

export interface TodayColState {}

class TodayCol extends React.Component<TodayColProps, TodayColState> {
  public constructor(props: TodayColProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={'listViewContentSecondColDiv'}>
        <Title {...this.props} title={'今天'} />
        <TodayEdit />
        <TodayAct />
      </div>
    );
  }
}

export default TodayCol;
