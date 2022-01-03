import React from 'react';
import { RouteChildrenProps } from 'react-router';
import doneImg from '@/images/done.svg';
import './project_done_col.less';
import { Row } from 'antd';
import { Get } from '@/data/api';
import {
  Project,
  ProjectColProps,
  ProjectColState,
} from '@/components/todo/list_view/project/project_col';
import { Link } from 'umi';

export type ProjectDoneColProps = RouteChildrenProps & {};

export interface ProjectDoneColState {
  project: Project;
}

class ProjectDoneCol extends React.Component<
  ProjectDoneColProps,
  ProjectDoneColState
> {
  public constructor(props: ProjectDoneColProps) {
    super(props);
    this.state = {
      // @ts-ignore
      project: {},
    };
  }

  public componentDidMount() {
    this.updateByPath();
  }

  public componentDidUpdate(
    prevProps: Readonly<ProjectColProps>,
    prevState: Readonly<ProjectColState>,
    snapshot?: any,
  ) {
    if (prevProps.match?.url != this.props.match?.url) {
      this.updateByPath();
    }
  }

  private updateByPath() {
    let path: string =
      this.props.match?.path == undefined ? '' : this.props.match?.path;
    if (path == '/todo/list_view/project/:project_id/done') {
      // @ts-ignore
      this.queryProject(this.props.match?.params.project_id);
    }
  }

  private queryProject(projectID: number) {
    Get('/project/' + projectID, (d) => {
      this.setState({ project: d });
    });
  }

  public render() {
    return (
      <div>
        <Row className={'doneDiv'} justify={'center'}>
          <img className={'img'} src={doneImg} />
        </Row>
        <Row className={'doneTitle'} justify={'center'}>
          {this.state.project.name}
        </Row>
        <Row className={'doneDesc'} justify={'center'}>
          恭喜完成项目！可以前往
          <Link to={'/todo/list_view/done/' + this.state.project.id}>
            已完成
          </Link>
          进行查看或撤回
        </Row>
      </div>
    );
  }
}

export default ProjectDoneCol;
