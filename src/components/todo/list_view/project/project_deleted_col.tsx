import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Row } from 'antd';
import { Link } from 'umi';
import './project_deleted_col.less';
import deleteImg from '@/images/deleted.svg';
import {
  Project,
  ProjectColProps,
  ProjectColState,
} from '@/components/todo/list_view/project/project_col';
import { Get } from '@/data/api';

export type ProjectDeletedColProps = RouteChildrenProps & {};

export interface ProjectDeletedColState {
  project: Project;
}

class ProjectDeletedCol extends React.Component<
  ProjectDeletedColProps,
  ProjectDeletedColState
> {
  public constructor(props: ProjectDeletedColProps) {
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
    if (path == '/todo/list_view/project/:project_id/deleted') {
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
        <Row className={'deleteDiv'} justify={'center'}>
          <img className={'img'} src={deleteImg} />
        </Row>
        <Row className={'deleteTitle'} justify={'center'}>
          {this.state.project.name}
        </Row>
        <Row className={'deleteDesc'} justify={'center'}>
          项目已被删除！可以前往
          <Link to={'/todo/list_view/deleted/' + this.state.project.id}>
            回收站
          </Link>
          查看或撤回
        </Row>
      </div>
    );
  }
}

export default ProjectDeletedCol;
