# vue2


## 目录结构

``` bash
├── build                                        // 构建相关  
├── config                                       // 配置相关
├── src                                          // 项目代码
│   ├── assets                                   // 样式、图标等静态资源
│   ├── components                               // 全局公用组件
│   │   ├── listItem.vue                         // List组件
│   ├── config                                   // 全局公用方法
│   │   ├── cache.js                             // 缓存方法
│   │   ├── directive.js                         // 指令方法
│   │   ├── fetch.js                             // 请求方法
│   ├── page
│   │   ├── index
│   │   |   ├── index.vue                        // 首页
│   ├── router
│   │   ├── index.js                             // 路由配置       
│   ├── store
│   │   ├── index.js                             // 全局store
│   ├── App.vue                                  // 页面入口
│   └── main.js                                  // 程序入口
├── static                                       // 空文件夹，只作为github保留
├── .babelrc                                     // babel-loader 配置
├── .eslintrc.js                                 // eslint 配置项
├── .gitignore                                   // git 忽略项
├── index.html                                   // 入口html文件
└── package.json                                 // package.json
```

## 安装运行

``` bash
# 安装
npm install

# 运行 localhost:8086
npm run dev

# 打包
npm run build（File in the docs folder）
```