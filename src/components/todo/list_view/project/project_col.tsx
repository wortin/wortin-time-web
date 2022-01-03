import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { ProAct } from '@/components/todo/list_view/project/proact';
import { Get, Post } from '@/data/api';
import './project_col.less';
import {
  Dropdown,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  List,
  Row,
  Select,
  Menu,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import DataEmpty from '@/components/data_empty';
import { Link } from 'umi';
import ActionCol from '@/components/todo/list_view/action/action_col';
import Title from '@/components/todo/list_view/common/title';
import {
  DownOutlined,
  FilterOutlined,
  UserOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons';

export type ProjectColProps = RouteChildrenProps & {
  queryProjects: () => void;
};

export interface ProjectColState {
  project: Project;
  targets: Array<Target>;
  curActionName: string;
  selectedActionID: number;
  stateFilter: string;
  orderBy: string;
}

export interface Project {
  id: number;
  name: string;
  targetID: number;
  targetName: string;
  planedStartDate: string;
  planedEndDate: string;
  desc: string;
  state: number;
  actions: Array<Action>;
}

export interface Action {
  id: number;
  name: string;
  planedDate: string;
  desc: string;
  state: number;
  subActions: Array<SubAction>;
  subActionCount: number;
  completedSubActionCount: number;
}

export interface SubAction {
  id: number;
  name: string;
  state: number;
}

interface Target {
  id: number;
  name: string;
  state: number;
}

const dateFormat = 'YYYY/MM/DD';

class ProjectCol extends React.Component<ProjectColProps, ProjectColState> {
  public constructor(props: ProjectColProps) {
    super(props);
    this.state = {
      // @ts-ignore
      project: { actions: [{}] },
      targets: [],
      curActionName: '',
      selectedActionID: 0,
      stateFilter: '未完成',
      orderBy: '创建时间',
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
    if (
      path == '/todo/list_view/project/:project_id' ||
      path == '/todo/list_view/project/:project_id/action/:action_id'
    ) {
      // @ts-ignore
      this.queryProject(this.props.match?.params.project_id);
      this.queryTargets();
      if (path == '/todo/list_view/project/:project_id/action/:action_id') {
        this.setState({ selectedActionID: this.props.match?.params.action_id });
      }
    }
  }

  private queryProject(projectID: number) {
    Get('/project/' + projectID, (d) => {
      this.setState({ project: d });
    });
  }

  private setProjectStateDone() {
    let projectID = this.state.project.id;
    Post('/project/' + projectID, { state: 2 }, () => {
      this.props.history.push('/todo/list_view/project/' + projectID + '/done');
    });
  }

  private setProjectStateDeleted() {
    let projectID = this.state.project.id;
    Post('/project/' + projectID, { state: 1 }, () => {
      this.props.history.push(
        '/todo/list_view/project/' + projectID + '/deleted',
      );
    });
  }

  private setProjectTargetID(projectID: number, targetID: number) {
    Post('/project/' + projectID, { targetID: targetID }, () => {
      this.queryProject(projectID);
    });
  }

  private setProjectPlanedDate(
    projectID: number,
    planedStartDate: string,
    planedEndDate: string,
  ) {
    Post(
      '/project/' + projectID,
      { planedStartDate: planedStartDate, planedEndDate: planedEndDate },
      () => {
        this.queryProject(projectID);
      },
    );
  }

  private setProjectDesc(projectID: number, desc: string) {
    Post('/project/' + projectID, { desc: desc }, () => {
      this.queryProject(projectID);
    });
  }

  private queryTargets() {
    Get('/targets?pageNo=1&pageSize=9999', (d) => {
      this.setState({ targets: d.targets });
    });
  }

  private createAction(projectID: number, actionName: string) {
    if (actionName) {
      Post('/action', { actionName: actionName, projectID: projectID }, (d) => {
        this.props.history.push(
          '/todo/list_view/project/' + projectID + '/action/' + d,
        );
        this.setState({ curActionName: '' });
        this.queryProject(this.state.project.id);
      });
    }
  }

  private setActionStateDone(actionID: number) {
    Post('/action/' + actionID, { state: 2 }, () => {
      console.log(this.props.match?.path);
      if (this.props.match?.path == '/todo/list_view/project/:projectID') {
        this.props.history.push(
          this.props.match?.url + '/action/' + actionID + '/done',
        );
      } else {
        this.props.history.push(this.props.match?.url + '/done');
      }
    });
  }

  private setActionStateDeleted(actionID: number) {
    Post('/action/' + actionID, { state: 1 }, () => {
      if (this.props.match?.path == '/todo/list_view/project/:projectID') {
        this.props.history.push(
          this.props.match?.url + '/action/' + actionID + '/deleted',
        );
      } else {
        this.props.history.push(this.props.match?.url + '/deleted');
      }
    });
  }

  private onShowDoneActionClick() {}

  private onStateFilterMenuClick(key: string) {
    switch (key) {
      case 'doing':
        this.setState({ stateFilter: '未完成' });
        break;
      case 'done':
        this.setState({ stateFilter: '已完成' });
        break;
      case 'all':
        this.setState({ stateFilter: '所有的' });
        break;
    }
  }

  private onOrderByMenuClick(key: string) {
    switch (key) {
      case 'createTime':
        this.setState({ orderBy: '创建时间' });
        break;
      case 'planedDate':
        this.setState({ orderBy: '计划日期' });
        break;
      case 'name':
        this.setState({ orderBy: '动作名称' });
        break;
    }
  }

  public render() {
    return (
      <Row style={{ height: '100%' }}>
        <Col
          span={this.state.selectedActionID == 0 ? 24 : 12}
          style={
            this.state.selectedActionID == 0
              ? {}
              : { borderRight: '0.5px solid #ddd' }
          }
        >
          <div className={'projectCol'}>
            {/*标题*/}
            <Title
              {...this.props}
              title={this.state.project.name}
              id={this.state.project.id}
              onDeletedClick={() => this.setProjectStateDeleted()}
              onDoneClick={() => this.setProjectStateDone()}
            />
            {/*编辑*/}
            <div className={'editDiv'}>
              {/*输入动作名*/}
              <Row>
                <Form style={{ width: '100%' }}>
                  <Form.Item
                    name={'actionName'}
                    rules={[{ required: true, message: '请输入动作名' }]}
                  >
                    <Input
                      placeholder="输入动作名，回车即可创建"
                      bordered={false}
                      onChange={(e) =>
                        this.setState({ curActionName: e.target.value })
                      }
                      onPressEnter={(e) =>
                        this.createAction(
                          this.state.project.id,
                          e.currentTarget.value,
                        )
                      }
                      value={this.state.curActionName}
                      autoComplete={'off'}
                    />
                  </Form.Item>
                </Form>
              </Row>
              <Row className={'divider'} />
              {/*关联目标*/}
              <Row className={'targetRow'} align={'middle'}>
                <Col span={6}>关联目标</Col>
                <Col span={18}>
                  <Select
                    placeholder="请选择一个目标"
                    size={'small'}
                    bordered={false}
                    value={
                      this.state.project.targetID == 0
                        ? undefined
                        : this.state.project.targetName
                    }
                    onChange={(value) =>
                      this.setProjectTargetID(
                        this.state.project.id,
                        parseInt(value),
                      )
                    }
                  >
                    {this.state.targets.map((t) => (
                      <Select.Option value={t.id} key={t.id}>
                        {t.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              {/*计划时间*/}
              <Row className={'planedTimeRow'} align={'middle'}>
                <Col span={6}>计划时间</Col>
                <Col span={18}>
                  <DatePicker.RangePicker
                    size={'small'}
                    bordered={false}
                    value={
                      this.state.project.planedStartDate == ''
                        ? undefined
                        : [
                            moment(
                              this.state.project.planedStartDate,
                              dateFormat,
                            ),
                            moment(
                              this.state.project.planedEndDate,
                              dateFormat,
                            ),
                          ]
                    }
                    onChange={(dates) =>
                      this.setProjectPlanedDate(
                        this.state.project.id,
                        dates[0].format(dateFormat),
                        dates[1].format(dateFormat),
                      )
                    }
                  />
                </Col>
              </Row>
              {/*项目详情*/}
              <Row className={'projDescRow'} align={'top'}>
                <Col span={6}>项目详情</Col>
                <Col span={18}>
                  <TextArea
                    placeholder={'请输入项目信息'}
                    autoSize={{ minRows: 1, maxRows: 10 }}
                    value={this.state.project.desc}
                    onChange={(e) =>
                      this.setProjectDesc(
                        this.state.project.id,
                        e.currentTarget.value,
                      )
                    }
                  />
                </Col>
              </Row>
            </div>
            <Row className={'dividerLine'} />
            {/*筛选按钮*/}
            <Row style={{ margin: '20px 0px', width: '100%' }} justify={'end'}>
              {/*排序：创建时间..*/}
              <Dropdown.Button
                style={{ margin: '0px 10px', color: '#87898a' }}
                size={'small'}
                icon={<SortAscendingOutlined />}
                onClick={this.onShowDoneActionClick}
                overlay={
                  <Menu onClick={(e) => this.onOrderByMenuClick(e.key)}>
                    <Menu.Item key="createTime" icon={<UserOutlined />}>
                      创建时间
                    </Menu.Item>
                    <Menu.Item key="planedDate" icon={<UserOutlined />}>
                      计划日期
                    </Menu.Item>
                    <Menu.Item key="name" icon={<UserOutlined />}>
                      动作名称
                    </Menu.Item>
                  </Menu>
                }
              >
                {this.state.orderBy}
              </Dropdown.Button>
              {/*未完成/完成/全部*/}
              <Dropdown.Button
                size={'small'}
                icon={<FilterOutlined />}
                onClick={this.onShowDoneActionClick}
                overlay={
                  <Menu onClick={(e) => this.onStateFilterMenuClick(e.key)}>
                    <Menu.Item key="doing" icon={<UserOutlined />}>
                      未完成
                    </Menu.Item>
                    <Menu.Item key="done" icon={<UserOutlined />}>
                      已完成
                    </Menu.Item>
                    <Menu.Item key="all" icon={<UserOutlined />}>
                      所有的
                    </Menu.Item>
                  </Menu>
                }
              >
                {this.state.stateFilter}
              </Dropdown.Button>
            </Row>

            {/*动作列表*/}
            <div className={'actionDiv'}>
              <Row>
                <ConfigProvider
                  renderEmpty={() => (
                    <DataEmpty
                      {...this.props}
                      text={'暂无动作，请创建或确认项目完成'}
                    />
                  )}
                >
                  <List
                    dataSource={this.state.project.actions}
                    style={{
                      width: '100%',
                      marginTop: '10px',
                    }}
                    bordered={false}
                    split={false}
                    renderItem={(item) => (
                      <List.Item>
                        <Link
                          to={
                            '/todo/list_view/project/' +
                            this.state.project.id +
                            '/action/' +
                            item.id
                          }
                          style={
                            item.id == this.state.selectedActionID
                              ? { width: '100%' }
                              : { width: '100%', color: '#444' }
                          }
                        >
                          <Row className={'actionListRow'} align={'middle'}>
                            <Col span={16}>
                              <Row>
                                <div>{item.name}</div>
                              </Row>
                              <Row>
                                <div className={'actionDetailDiv'}>
                                  {item.planedDate}
                                </div>
                              </Row>
                            </Col>
                            <Col span={8}>
                              <div className={'count'}>
                                {item.completedSubActionCount +
                                  '/' +
                                  item.subActionCount}
                              </div>
                            </Col>
                          </Row>
                        </Link>
                      </List.Item>
                    )}
                  />
                </ConfigProvider>
              </Row>
            </div>
          </div>
        </Col>

        <Col span={this.state.selectedActionID == 0 ? 0 : 12}>
          <ActionCol {...this.props} />
        </Col>
      </Row>
    );
  }
}

export default ProjectCol;
