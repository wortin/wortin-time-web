# Wortin Time Web

我丁时间管理网页端

## 项目创建

使用umi框架创建

```shell
yarn create @umijs/umi-app
yarn
```

## 新建路由

```shell
npx umi g page products --typescript
```

在 .umirc.ts 中配置路由

```javascript
import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
  ],
});
```

## 启动应用

安装依赖

```bash
yarn
```

启动

```bash
yarn start
```


