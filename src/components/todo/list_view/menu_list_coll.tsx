import { Col, Collapse, Input, List, Row } from 'antd';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import './menu_list_coll.less';
import { Get, Post } from '@/data/api';

export type MenuListCollProps = RouteChildrenProps & {};

export interface MenuListCollState {
  creProName: string;
  projects: Array<Projects>;
  total: number;
  pageNo: number;
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
    };
  }

  public componentDidMount() {
    this.queryProjects(this, 1);
  }

  private createProject(projectName: string) {
    Post('/project', { projectName: projectName }, (d) => {
      this.setState({ creProName: '' });
    });
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

  public render() {
    return (
      <div className={'coll'}>
        <Collapse defaultActiveKey={['project']} ghost>
          <Collapse.Panel header={'项目'} key={'project'} extra={'1'}>
            <div style={{ marginBottom: '20px' }}>
              <Input
                className={'projNameInput'}
                placeholder="输入项目名，回车即可创建"
                bordered={false}
                onChange={(e) => this.setState({ creProName: e.target.value })}
                onPressEnter={(e) => this.createProject(e.currentTarget.value)}
                value={''}
              />
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
                bordered={false}
                split={false}
                renderItem={(item) => (
                  <List.Item onClick={(e) => {}}>
                    <Row style={{ width: '100%' }}>
                      <Col span={18}>{item.name}</Col>
                      <Col span={6}>
                        <div style={{ float: 'right' }}>
                          {item.completedActionCount + '/' + item.actionCount}
                        </div>
                      </Col>
                    </Row>
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
