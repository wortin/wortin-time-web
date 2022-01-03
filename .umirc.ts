import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    // 访问主页
    {
      path: '/todo/list_view/today/:action_id',
      component: '@/pages/index',
      exact: true,
    },
    { path: '/todo/list_view/today', component: '@/pages/index', exact: true },
    {
      path: '/todo/list_view/project/:project_id',
      component: '@/pages/index',
      exact: true,
    },
    {
      path: '/todo/list_view/project/:project_id/done',
      component: '@/pages/index',
      exact: true,
    },
    {
      path: '/todo/list_view/project/:project_id/deleted',
      component: '@/pages/index',
      exact: true,
    },
    {
      path: '/todo/list_view/project/:project_id/action/:action_id',
      component: '@/pages/index',
      exact: true,
    },

    {
      path: '/todo/list_view/trifles',
      component: '@/pages/index',
      exact: true,
    },
    { path: '/todo/list_view/done', component: '@/pages/index', exact: true },
    {
      path: '/todo/list_view/deleted',
      component: '@/pages/index',
      exact: true,
    },
    { path: '/todo/fq_view', component: '@/pages/index', exact: true },
    { path: '/todo/cal_view', component: '@/pages/index', exact: true },
    { path: '/todo/att_view', component: '@/pages/index', exact: true },

    // 重定向
    { path: '/todo/list_view', redirect: '/todo/list_view/today', exact: true },
    { path: '/todo', redirect: '/todo/list_view/today', exact: true },
    { path: '/', redirect: '/todo/list_view/today', exact: true },
    {
      path: '/todo/list_view/project/:project_id/action/:action_id/done',
      redirect: '/todo/list_view/project/:project_id/',
      exact: true,
    },
    {
      path: '/todo/list_view/project/:project_id/action/:action_id/deleted',
      redirect: '/todo/list_view/project/:project_id/',
      exact: true,
    },
    {
      path: '/todo/list_view/project/:project_id/action/:action_id/sub_action/:sub_action_id',
      redirect: '/todo/list_view/project/:project_id/action/:action_id',
      exact: true,
    },
    // 404
    { path: '*', component: '@/pages/page404' },
  ],
});
