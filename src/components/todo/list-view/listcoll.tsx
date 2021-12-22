import React, { KeyboardEvent, useState } from 'react';
import { Col, Collapse, Input, List, Row } from 'antd';
import { Get, Post } from '@/data/api';
import styles from '@/components/todo/list-view/listcoll.less';

const pageSize: number = 10;
let isInit: boolean = true;

export const ListColl: React.FC<{}> = ({}) => {
  const [projects, setProjects] = useState<Array<Projects>>([]);
  const [total, setTotal] = useState<number>(0);
  const [isInit, setIsInit] = useState<boolean>(true);
  const [pageNo, setPageNo] = useState<number>(1);
  const [creProName, setCreProName] = useState<string>('');
  if (isInit) {
    Get('/projects?pageNo=' + pageNo + '&pageSize=' + pageSize, function (d) {
      setProjects(d.projects);
      setTotal(d.total);
    });
    setIsInit(false);
  }
  return (
    <Collapse
      defaultActiveKey={['1']}
      ghost
      style={{
        margin: '0 5px',
        borderTop: '0.5px solid #ddd',
        borderBottom: '0.5px solid #ddd',
      }}
    >
      <Collapse.Panel header={'项目'} key={'1'} extra={total}>
        {/*输入框*/}
        <div style={{ marginBottom: '20px' }}>
          <Input
            placeholder="输入项目名，回车即可创建"
            bordered={false}
            style={{
              border: 'none',
              background: '#eee',
              padding: '5px 10px',
              width: '100%',
            }}
            onChange={(e) => {
              setCreProName(e.target.value);
            }}
            onPressEnter={(e) => {
              Post('/project', { projectName: e.currentTarget.value }, (d) => {
                setIsInit(true);
                setCreProName('');
              });
            }}
            value={creProName}
          />
        </div>
        {/*项目列表*/}
        <div className={styles.listDiv}>
          <List
            size={'small'}
            dataSource={projects}
            pagination={{
              onChange: (page) => {
                Get(
                  '/projects?pageNo=' + page + '&pageSize=' + pageSize,
                  function (d) {
                    setProjects(d.projects);
                    setTotal(d.total);
                    setPageNo(page);
                  },
                );
              },
              pageSize: pageSize,
              size: 'small',
              total: total,
              current: pageNo,
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

      <Collapse.Panel header={'日程'} key={'2'} extra={'0/5'}>
        <div style={{ marginBottom: '20px' }}>
          <Input
            placeholder="输入日程名，回车即可创建"
            bordered={false}
            style={{
              border: 'none',
              background: '#eee',
              padding: '5px 10px',
              width: '100%',
            }}
            onPressEnter={(e) => {}}
          />
        </div>
        <div className={styles.listDiv}>
          <List
            size={'small'}
            dataSource={[{}, {}, {}, {}]}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            bordered={false}
            split={false}
            renderItem={(item) => (
              <List.Item>
                <Row style={{ width: '100%' }}>
                  <Col span={18}>项目一</Col>
                  <Col span={6}>
                    <div style={{ float: 'right' }}>3/10</div>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};

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
