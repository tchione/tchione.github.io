---
icon: pen-to-square
date: 2025-03-20
category:
  - 技术
tag:
  - Vue
  - 前端
---


# Vue项目压缩
### 一、去掉map文件：
* map文件是线上调试使用的，增加很多了dist包的大小
* 修改vue.config.js文件（没有就自己创建）

```nashorn js
module.exports = {
  productionSourceMap: false, #取消map文件
  configureWebpack: config => {  # 增加markdown的支持
    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader'
        },
        {
          loader: 'vue-loader'
        },
        {
          loader: 'html-loader'
        }
      ]
    }
    )
  }
}
```

### 二、按照需求引入，而不是全部引入。
* 在使用vue-Element的时候直接引入了全部，造成了依赖过大。
* Element官方文档有详细的说明。
* 配置babel时报错的处理
* [官方地址](https://element.faas.ele.me/)

```nashorn js
module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
```
### 三、vue开启gzip优化：
* 新版本的vue好像自己携带了gzip的功能，我只配置了nginx的gzp就成功了
**ps：若果没有自带请自行百度。。。`cnpm install --save-dev compression-webpack-plugin
`**

```nashorn js
gzip on; 
      gzip_static on;
      gzip_buffers 4 16k;
      gzip_comp_level 5;
      gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg 
                 image/gif image/png;
```
### 四、路由懒加载：
* 因为vue是一个页面，所以每次进去都会全部加载资源，配置路由的懒加载，用到才回加载

```nashorn js
    component: resolve => require(['@/views/Login'], resolve)  #懒加载
    component: Home  # 普通加载
```
### 五、静态资源cdn
* 问题：vue中import引入的资源会全部打包进js中，增大的包的大小与加载速度，
* 解决：引用外部cdn中的js、css。具体实现请百度，本项目暂时没有配置
	* 栗子：`<script src="//cdn.bootcss.com/vue/2.3.2/vue.min.js"></script>`
