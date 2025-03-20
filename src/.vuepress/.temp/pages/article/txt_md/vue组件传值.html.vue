<template><div><h1 id="vue自用组件传值方式" tabindex="-1"><a class="header-anchor" href="#vue自用组件传值方式"><span>VUE自用组件传值方式</span></a></h1>
<h3 id="store传值" tabindex="-1"><a class="header-anchor" href="#store传值"><span>store传值</span></a></h3>
<ul>
<li><code v-pre>store</code>是全局保存数据，一般保存一些cookie，权限，用户等信息。</li>
<li>需要进行注册<code v-pre>app.use(pinia)</code></li>
<li>这个是持久化插件，可以将数据持久保存在本地<code v-pre>pinia-plugin-persistedstate</code></li>
</ul>
<h3 id="父组件传子组件" tabindex="-1"><a class="header-anchor" href="#父组件传子组件"><span>父组件传子组件</span></a></h3>
<ul>
<li>
<p>暴露子组件函数，父组件调用</p>
<ul>
<li>
<p>子组件暴露函数</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>const show = (item={})=>{} //item是参数{}是类型</span></span>
<span class="line"><span>defineExpose({show})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>父组件调用</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>导入： import UserDialog from './userDialog.vue'</span></span>
<span class="line"><span>注册：  components: {UserDialog}</span></span>
<span class="line"><span>使用： &#x3C;UserDialog @custClick="reGetTable" ref="userDialog"/>--(html)</span></span>
<span class="line"><span>传值： this.$refs.userDialog.show(row)----(js)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>通过props传值</p>
<ul>
<li>
<p>父组件</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>&#x3C;UserDialog :myName="data"/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>子组件</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>export default{props: {myName: {type:String,requires: true}}</span></span>
<span class="line"><span>键名，字符串类型，必填</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="子组件传父组件" tabindex="-1"><a class="header-anchor" href="#子组件传父组件"><span>子组件传父组件</span></a></h3>
<ul>
<li>
<p>通过emit传值，ts要导入</p>
<ul>
<li>
<p>子组件</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>import {defineEmits} from "vue";</span></span>
<span class="line"><span>const emit = defineEmits(['custClick']);</span></span>
<span class="line"><span>emit('custClick', 1)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>父组件</p>
<ul>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>&#x3C;UserDialog @custClick="reGetTable" ref="userDialog"/></span></span>
<span class="line"><span>通过子组件绑定的字符串custClick找到父组件对应的函数reGetTable</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="路由间传值" tabindex="-1"><a class="header-anchor" href="#路由间传值"><span>路由间传值</span></a></h3>
<ul>
<li>传值跳转后url保留参数<code v-pre>query</code>
<ul>
<li><code v-pre>$this.$router.push({ name: 'map-show', query: { search: 'aaa' } })</code></li>
<li>跳转后获取参数<code v-pre>this.$route.query.search</code></li>
</ul>
</li>
<li>url不保留参数
<ul>
<li><code v-pre>this.$router.push({name: 'sign-off',params: { preData: row.id , flag: false}})</code></li>
</ul>
</li>
</ul>
</div></template>


