import React from 'react';
import { Layout, Menu } from 'antd';

import styles from './timelayout.css';
import { Link } from 'umi';
import { TimeLayOutData } from '@/bo/timelayout';

const { Header, Content, Footer } = Layout;

// TimeLayout 网页总体布局
export const TimeLayout: React.FC<{
  activeItem: TimeLayOutData;
  menuItems: Array<TimeLayOutData>;
}> = ({ activeItem, menuItems }) => {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#fff',
        }}
      >
        <div className={styles.logo} />
        <Menu mode="horizontal" selectedKeys={[activeItem.key]}>
          {menuItems.map(({ key, title }) => {
            return (
              <Menu.Item key={key}>
                <Link to={'/' + key}>{title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px 0px 50px', marginTop: 64 }}>
        <div className={styles.content}>
          <activeItem.content />
        </div>
      </Content>
      <Footer>
        <div className={styles.footer}>Wortin Time ©2021 Created by wortin</div>
      </Footer>
    </Layout>
  );
};
