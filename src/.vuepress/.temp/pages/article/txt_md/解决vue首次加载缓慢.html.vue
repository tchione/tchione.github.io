<template><div><h1 id="vue项目压缩" tabindex="-1"><a class="header-anchor" href="#vue项目压缩"><span>Vue项目压缩</span></a></h1>
<h3 id="一、去掉map文件" tabindex="-1"><a class="header-anchor" href="#一、去掉map文件"><span>一、去掉map文件：</span></a></h3>
<ul>
<li>map文件是线上调试使用的，增加很多了dist包的大小</li>
<li>修改vue.config.js文件（没有就自己创建）</li>
</ul>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  productionSourceMap: false, #取消map文件</span></span>
<span class="line"><span>  configureWebpack: config => {  # 增加markdown的支持</span></span>
<span class="line"><span>    config.module.rules.push({</span></span>
<span class="line"><span>      // 处理markdown文件</span></span>
<span class="line"><span>      test: /\.md$/,</span></span>
<span class="line"><span>      use: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          loader: 'markdown-loader'</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          loader: 'vue-loader'</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          loader: 'html-loader'</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、按照需求引入-而不是全部引入。" tabindex="-1"><a class="header-anchor" href="#二、按照需求引入-而不是全部引入。"><span>二、按照需求引入，而不是全部引入。</span></a></h3>
<ul>
<li>在使用vue-Element的时候直接引入了全部，造成了依赖过大。</li>
<li>Element官方文档有详细的说明。</li>
<li>配置babel时报错的处理</li>
<li><a href="https://element.faas.ele.me/" target="_blank" rel="noopener noreferrer">官方地址</a></li>
</ul>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  presets: [['@babel/preset-env', { modules: false }]],</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      'component',</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        libraryName: 'element-ui',</span></span>
<span class="line"><span>        styleLibraryName: 'theme-chalk'</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、vue开启gzip优化" tabindex="-1"><a class="header-anchor" href="#三、vue开启gzip优化"><span>三、vue开启gzip优化：</span></a></h3>
<ul>
<li>新版本的vue好像自己携带了gzip的功能，我只配置了nginx的gzp就成功了<br>
<strong>ps：若果没有自带请自行百度。。。<code v-pre>cnpm install --save-dev compression-webpack-plugin </code></strong></li>
</ul>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>gzip on; </span></span>
<span class="line"><span>      gzip_static on;</span></span>
<span class="line"><span>      gzip_buffers 4 16k;</span></span>
<span class="line"><span>      gzip_comp_level 5;</span></span>
<span class="line"><span>      gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg </span></span>
<span class="line"><span>                 image/gif image/png;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、路由懒加载" tabindex="-1"><a class="header-anchor" href="#四、路由懒加载"><span>四、路由懒加载：</span></a></h3>
<ul>
<li>因为vue是一个页面，所以每次进去都会全部加载资源，配置路由的懒加载，用到才回加载</li>
</ul>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>    component: resolve => require(['@/views/Login'], resolve)  #懒加载</span></span>
<span class="line"><span>    component: Home  # 普通加载</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、静态资源cdn" tabindex="-1"><a class="header-anchor" href="#五、静态资源cdn"><span>五、静态资源cdn</span></a></h3>
<ul>
<li>问题：vue中import引入的资源会全部打包进js中，增大的包的大小与加载速度，</li>
<li>解决：引用外部cdn中的js、css。具体实现请百度，本项目暂时没有配置
<ul>
<li>栗子：<code v-pre>&lt;script src=&quot;//cdn.bootcss.com/vue/2.3.2/vue.min.js&quot;&gt;&lt;/script&gt;</code></li>
</ul>
</li>
</ul>
</div></template>


