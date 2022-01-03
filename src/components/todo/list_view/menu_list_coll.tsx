import { Col, Collapse, Form, Input, List, Row } from 'antd';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import './menu_list_coll.less';
import { Get, Post } from '@/data/api';
import { Link } from 'umi';

export type MenuListCollProps = RouteChildrenProps & {};

export interface MenuListCollState {
  creProName: string;
  projects: Array<Projects>;
  total: number;
  pageNo: number;
  selectedProjectID: number;
}

interface Projects {
  id: number;
  name: string;
  targetID: number;
  planedStartDate: string;
  planedEndDate: string;
  desc: string;
  state: number;
  actionCount: number;
  completedActionCount: number;
  targetName: string;
}

const pageSize: number = 10;

class MenuListColl extends React.Component<
  MenuListCollProps,
  MenuListCollState
> {
  public constructor(props: MenuListCollProps) {
    super(props);
    this.state = {
      creProName: '',
      projects: [],
      total: 0,
      pageNo: 1,
      selectedProjectID: -1,
    };
  }

  public componentDidMount() {
    this.queryProjects(this, 1);
    this.updateByPath();
  }

  public componentDidUpdate(
    prevProps: Readonly<MenuListCollProps>,
    prevState: Readonly<MenuListCollState>,
    snapshot?: any,
  ) {
    if (prevProps.match?.url != this.props.match?.url) {
      this.updateByPath();
    }
  }

  private createProject(projectName: string) {
    if (projectName) {
      Post('/project', { projectName: projectName }, (d) => {
        this.setState({ creProName: '', pageNo: 1 });
        this.queryProjects(this, this.state.pageNo);
        this.props.history.push('/todo/list_view/project/' + d);
      });
    }
  }

  private queryProjects(that: MenuListColl, pageNo: number) {
    Get('/projects?pageNo=' + pageNo + '&pageSize=' + pageSize, function (d) {
      that.setState({
        projects: d.projects,
        total: d.total,
        pageNo: pageNo,
      });
    });
  }

  private updateByPath() {
    let path = this.props.match?.path;
    if (
      path == '/todo/list_view/project/:project_id' ||
      path == '/todo/list_view/project/:project_id/action/:action_id'
    ) {
      // @ts-ignore
      this.setState({ selectedProjectID: this.props.match.params.project_id });
      this.queryProjects(this, this.state.pageNo);
    }
  }

  public render() {
    return (
      <div className={'coll'}>
        <Collapse defaultActiveKey={['project']} ghost>
          <Collapse.Panel
            header={'项目'}
            key={'project'}
            extra={this.state.total}
          >
            <div className={'inputDiv'} style={{ marginBottom: '20px' }}>
              <Form>
                <Form.Item
                  name={'projectName'}
                  rules={[{ required: true, message: '项目名不能为空' }]}
                >
                  <Input
                    className={'projNameInput'}
                    placeholder="输入项目名，回车即可创建"
                    bordered={false}
                    onChange={(e) =>
                      this.setState({ creProName: e.target.value })
                    }
                    onPressEnter={(e) =>
                      this.createProject(e.currentTarget.value)
                    }
                    value={this.state.creProName}
                    autoComplete={'off'}
                  />
                </Form.Item>
              </Form>
            </div>
            {/*项目列表*/}
            <div className={'listDiv'}>
              <List
                size={'small'}
                dataSource={this.state.projects}
                pagination={{
                  onChange: (pageNo) => this.queryProjects(this, pageNo),
                  pageSize: pageSize,
                  size: 'small',
                  total: this.state.total,
                  current: this.state.pageNo,
                }}
                locale={{ emptyText: '暂无项目' }}
                bordered={false}
                split={false}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <Link
                      to={'/todo/list_view/project/' + item.id}
                      style={
                        item.id == this.state.selectedProjectID
                          ? { width: '100%' }
                          : { width: '100%', color: '#444' }
                      }
                    >
                      <Row>
                        <Col span={18}>{item.name}</Col>
                        <Col span={6}>
                          <div style={{ float: 'right' }}>
                            {item.completedActionCount + '/' + item.actionCount}
                          </div>
                        </Col>
                      </Row>
                    </Link>
                  </List.Item>
                )}
              />
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}

export default MenuListColl;
