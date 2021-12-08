import { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

import styles from './timelayout.css';
import { ToDo } from '@/components/todo';

const { Header, Content, Footer } = Layout;

export const TimeLayout: React.FC<{}> = ({}) => {
  const [menuSelect, setMenuSelect] = useState([
    TimeMenuItems[0].ind.toString(),
  ]);
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={menuSelect}
          onClick={(e) => {
            setMenuSelect([e.key]);
          }}
        >
          {TimeMenuItems.map(({ ind, title, content }) => {
            return <Menu.Item key={ind.toString()}>{title}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px', marginTop: 64 }}>
        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
        {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}
        {TimeMenuItems[Number(menuSelect[0])].content}
        <div className={styles.content}>Content</div>
      </Content>
      <Footer>
        <div className={styles.footer}>Wortin Time ©2021 Created by wortin</div>
      </Footer>
    </Layout>
  );
};

export const TimeMenuItems: Array<{
  ind: number;
  title: string;
  content: React.FC;
}> = [
  { ind: 0, title: '待办', content: ToDo },
  { ind: 1, title: '项目', content: ToDo },
  { ind: 2, title: '报告', content: ToDo },
  { ind: 3, title: '目标', content: ToDo },
  { ind: 4, title: '将来', content: ToDo },
];
