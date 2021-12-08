import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/todo', component: '@/pages/todo' },
    { path: '/project', component: '@/pages/project' },
    { path: '/report', component: '@/pages/report' },
    { path: '/target', component: '@/pages/target' },
    { path: '/feature', component: '@/pages/feature' },
  ],
});
