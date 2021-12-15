import React, { KeyboardEvent, useState } from 'react';
import { Col, Collapse, Input, List, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Post, Get } from '@/data/api';
import styles from '@/components/todo/list-view/listcoll.less';

export const ListColl: React.FC<{}> = ({}) => {
  const pageSize: number = 10;
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState<number>(0);
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
      <Collapse.Panel header={'项目'} key={'1'} extra={'0/5'}>
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
            onPressEnter={createProject}
          />
        </div>
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
                  },
                );
              },
              pageSize: pageSize,
              size: 'small',
              total: total,
            }}
            bordered={false}
            split={false}
            renderItem={(item) => (
              <List.Item>
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
            onPressEnter={createProject}
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

const createProject = (e: KeyboardEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  Post('/project', { projectName: value }, (d) => {
    console.log(d);
  });
};

const queryProjects = (pageNo: number, pageSize: number) => {};
