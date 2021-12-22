import AppLayoutC, { AppLayoutMenuInf } from '@/components/app_layout';
import React from 'react';
import { ToDoContentC } from '@/components/todo/todo_content';
import { RouteChildrenProps } from 'react-router';
import './index.less';

export default function IndexPage(props: RouteChildrenProps) {
  return <Index {...props} />;
}

type IndexProps = RouteChildrenProps & {};

export interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  public constructor(props: IndexProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <AppLayoutC
        {...this.props}
        menus={AppLayoutMenus}
        defaultMenu={ToDoAppLayOutMenu}
      />
    );
  }
}

export const ToDoAppLayOutMenu: AppLayoutMenuInf = {
  key: 'todo',
  title: '待办',
  content: ToDoContentC,
  pathReg: new RegExp('^/todo.*$'),
};
//
// export const ProjectWortinLayOutMenu: WortinLayoutMenuInf = {
//   key: 'project',
//   title: '项目',
// };
//
// export const ReportWortinLayOutMenu: WortinLayoutMenuInf = {
//   key: 'report',
//   title: '报告',
// };
//
// export const TargetWortinLayOutMenu: WortinLayoutMenuInf = {
//   key: 'target',
//   title: '目标',
// };
//
// export const FeatureWortinLayOutMenu: WortinLayoutMenuInf = {
//   key: 'feature',
//   title: '将来',
// };

export const AppLayoutMenus: Array<AppLayoutMenuInf> = [
  ToDoAppLayOutMenu,
  // ProjectWortinLayOutMenu,
  // ReportWortinLayOutMenu,
  // TargetWortinLayOutMenu,
  // FeatureWortinLayOutMenu,
];
