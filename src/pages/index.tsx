import styles from './index.less';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import { TimeLayout } from '@/components/timelayout';

const { Header, Content, Footer } = Layout;

export default function IndexPage() {
  return <TimeLayout />;
}
