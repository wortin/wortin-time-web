import React from 'react';
import { RouteChildrenProps } from 'react-router';
import Title from '@/components/todo/list_view/common/title';
import {
  Action,
  ProjectColProps,
  ProjectColState,
} from '@/components/todo/list_view/project/project_col';
import { Get, Post } from '@/data/api';
import './action_col.less';
import {
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  List,
  Row,
  Select,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import DataEmpty from '@/components/data_empty';
import { Link } from 'umi';

export type ActionColProps = RouteChildrenProps & {};

export interface ActionColState {
  action: Action;
  curSubActionName: string;
}

class ActionCol extends React.Component<ActionColProps, ActionColState> {
  public constructor(props: ActionColProps) {
    super(props);
    this.state = {
      action: { subActions: [{}] },
      curSubActionName: '',
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
    if (path == '/todo/list_view/project/:project_id/action/:action_id') {
      // @ts-ignore
      this.queryAction(this.props.match?.params.action_id);
    }
  }

  private queryAction(actionID: number) {
    Get('/action/' + actionID, (d) => {
      if (d.id == 0) {
        this.props.history.push('/404');
      } else {
        this.setState({ action: d });
      }
    });
  }

  private setActionStateDone() {
    console.log(this.state.action.id);
    Post('/action/' + this.state.action.id, { state: 2 }, (d) => {
      this.props.history.push(this.props.match?.url + '/done');
    });
  }

  private setActionStateDeleted() {
    Post('/action/' + this.state.action.id, { state: 1 }, (d) => {
      this.props.history.push(this.props.match?.url + '/deleted');
    });
  }

  private createSubAction(actionID: number, subActionName: string) {
    console.log(subActionName);
    if (subActionName) {
      Post(
        '/sub_action',
        { subActionName: subActionName, actionID: actionID },
        (d) => {
          this.props.history.push(this.props.match?.url + '/sub_action/' + d);
          this.setState({ curSubActionName: '' });
          this.queryAction(this.state.action.id);
        },
      );
    }
  }

  public render() {
    return (
      <div className={'actionCol'}>
        {/*标题*/}
        <Title
          {...this.props}
          title={this.state.action.name}
          id={this.state.action.id}
          onDoneClick={() => this.setActionStateDone()}
          onDeletedClick={() => this.setActionStateDeleted()}
        />

        {/*编辑*/}
        <Row>
          <Form style={{ width: '100%' }}>
            <Form.Item
              name={'subActionName'}
              rules={[{ required: true, message: '请输入子动作名' }]}
            >
              <Input
                placeholder="输入子动作名，回车即可创建"
                bordered={false}
                onChange={(e) =>
                  this.setState({ curSubActionName: e.target.value })
                }
                onPressEnter={(e) =>
                  this.createSubAction(
                    this.state.action.id,
                    e.currentTarget.value,
                  )
                }
                value={this.state.curSubActionName}
                autoComplete={'off'}
              />
            </Form.Item>
          </Form>
        </Row>
        <Row className={'divider'} />
        <Row align={'middle'} style={{ margin: '10px 0', height: '28px' }}>
          <Col span={6}>标签</Col>
          <Col span={18}>
            <Select
              mode="tags"
              style={{ border: 'none', width: '100%' }}
              placeholder="选择或输入新标签回车后创建"
              onChange={() => {}}
            >
              size={'small'}
              bordered={false}
              {[]}
            </Select>
          </Col>
        </Row>
        <Row align={'middle'} style={{ margin: '20px 0', height: '28px' }}>
          <Col span={6}>计划时间</Col>
          <Col span={18}>
            <DatePicker
              size={'small'}
              style={{ width: '100%' }}
              bordered={false}
            />
          </Col>
        </Row>
        <Row align={'top'} style={{ marginTop: '10px', minHeight: '28px' }}>
          <Col span={6}>动作详情</Col>
          <Col span={18}>
            <TextArea
              placeholder={'请输入动作信息'}
              autoSize={{ minRows: 1, maxRows: 10 }}
              style={{ width: '100%', border: 'none', padding: '0 8px' }}
            />
          </Col>
        </Row>

        <Row className={'dividerLine'} />

        {/*动作列表*/}
        <div className={'subActionDiv'}>
          <Row>
            <ConfigProvider
              renderEmpty={() => (
                <DataEmpty
                  {...this.props}
                  text={'暂无子动作，请创建或确认动作完成'}
                />
              )}
            >
              <List
                dataSource={this.state.action.subActions}
                style={{
                  width: '100%',
                  marginTop: '10px',
                }}
                bordered={false}
                split={false}
                renderItem={(item) => (
                  <List.Item>
                    <Row className={'subActionListRow'} align={'middle'}>
                      <Col span={16}>
                        <Row>
                          <div>{item.name}</div>
                        </Row>
                        {/*<Row>*/}
                        {/*  <div className={'actionDetailDiv'}>{item.planedDate}</div>*/}
                        {/*</Row>*/}
                      </Col>
                      <Col span={8}>
                        <div
                          className={'actionDone'}
                          onClick={() => this.setActionStateDone(item.id)}
                        >
                          完成
                        </div>
                        <div
                          className={'actionDelete'}
                          onClick={() => this.setActionStateDeleted(item.id)}
                        >
                          删除
                        </div>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              />
            </ConfigProvider>
          </Row>
        </div>
      </div>
    );
  }
}

export default ActionCol;
