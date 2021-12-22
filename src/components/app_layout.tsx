import React, { ComponentClass } from 'react';
import { Layout, Menu } from 'antd';
import styles from './app_layout.css';
import { Link } from 'umi';
import { RouteChildrenProps } from 'react-router';

const { Header, Content, Footer } = Layout;

type AppLayoutProps = RouteChildrenProps & {
  menus: Array<AppLayoutMenuInf>;
  defaultMenu: AppLayoutMenuInf;
};

export interface AppLayoutMenuInf {
  key: string;
  title: string;
  pathReg: RegExp;
  content: ComponentClass<any, any>;
}

export interface AppLayoutState {}

export default class AppLayoutC extends React.Component<
  AppLayoutProps,
  AppLayoutState
> {
  public constructor(props: AppLayoutProps) {
    super(props);
  }

  public render() {
    const { menus, defaultMenu } = this.props;
    let activeMenu: AppLayoutMenuInf = defaultMenu;
    let path: string;
    this.props.match?.path == undefined
      ? (path = '')
      : (path = this.props.match?.path);
    for (let m of menus) {
      if (m.pathReg.test(path)) {
        activeMenu = m;
        break;
      }
    }
    let AppContent: React.ComponentClass = activeMenu.content;
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
          <Menu mode="horizontal" selectedKeys={[activeMenu.key]}>
            {menus.map(({ key, title }) => {
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
            <AppContent {...this.props} />
          </div>
        </Content>
        <Footer>
          <div className={styles.footer}>
            Wortin Time ©2021 Created by wortin
          </div>
        </Footer>
      </Layout>
    );
  }
}
