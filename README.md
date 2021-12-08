# Wortin Time Web

我丁时间管理网页端

## 项目思路和设计

[文档](./docs/thought.md)

## 项目开发

### 创建

使用umi框架创建

```shell
yarn create @umijs/umi-app
yarn
```

### 新建路由

```shell
npx umi g page todo --typescript
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

### 启动应用

安装依赖

```bash
yarn
```

启动

```bash
yarn start
```

本地启动后，一般默认是8000，即 http://localhost:8000


