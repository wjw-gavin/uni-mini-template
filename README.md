# mini-template-next
uni-app + uView-ui + unocss + native-lodash

- [uni-app](https://uniapp.dcloud.net.cn)
- [uView-ui](https://www.uviewui.com/components/intro.html)
- [native-lodash](https://git.nucarf.cn/frontend/example/native-lodash/blob/master/README.md)

## 目录结构

```code

├── src                     // 项目源码
│   ├── api                 // 与后端交互使用的api方法和数据处理
│   │
│   ├── assets              // 放置一些资源
│   │     └── styles        // 样式资源
│   │
│   ├── components          // 公共组件
│   │
│   ├── http                // http 相关
│   │     └── config.js     // baseURL 配置
│   │     └── request.js    // request 配置（请求拦截、响应拦截）
│   │
│   ├── static              // 放置一些静态资源
│   │     └── images        // 图片
│   │  
│   ├── store               // vuex 相关配置
│   │     └── modules       // 功能模块状态管理
│   │     └── index.js      // 自动导入 store module
│   │  
│   ├── utils               // 工具方法
│   │     └── auth.js       // token 相关
│   │     └── global.js     // 全局的一些方法，可以通过this.xxx调用
│   │     └── index.js      // 常用的工具方法
│   │
└── vue.config.js           // 详细见https://cli.vuejs.org/zh/config/#vue-config-js 

```
