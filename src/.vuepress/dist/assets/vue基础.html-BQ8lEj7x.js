import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-PMTzUK1j.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="vue项目部署" tabindex="-1"><a class="header-anchor" href="#vue项目部署"><span>Vue项目部署</span></a></h1><h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化"><span>项目初始化：</span></a></h2><ul><li>安装<code>node</code>与<code>npm</code>或者<code>cnpm</code><ul><li><code>cnpm</code>:<code>npm install cnpm -g --registry=https://registry.npm.taobao.org</code></li><li><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">官方下载：<code>node</code></a></li></ul></li><li>全局安装<code>vue-cil</code>：<code>cnpm install -g vue-cli </code></li><li>项目初始化:<code>vue init webpack</code> <strong>ps:会有一堆配置</strong></li><li>初始化项目依赖：<code>cnpm install </code></li><li>启动项目：<code>npm run dev</code> <strong>ps:可以配置编译器启动</strong></li></ul><h2 id="vue使用" tabindex="-1"><a class="header-anchor" href="#vue使用"><span>vue使用</span></a></h2><h3 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值"><span>赋值：</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!--使用插值表达式展示--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{message}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //定义数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            message</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;hello world&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绑定事件" tabindex="-1"><a class="header-anchor" href="#绑定事件"><span>绑定事件：</span></a></h3><ul><li><strong>@click</strong></li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;button&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;点击改变&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;fun01&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //定义数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            message</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;hello world&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }，</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                fun01</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">message</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;你好,世界...&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绑定键盘输入事件" tabindex="-1"><a class="header-anchor" href="#绑定键盘输入事件"><span>绑定键盘输入事件：</span></a></h3><ul><li><strong>@keydown</strong></li><li><strong>ps:对文本输入框做校验，使用键盘按下事件，如果按下0-9的数字，正常显示，其他按键则阻止事件执行。</strong></li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hello..&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @keydown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;fun01($event)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //定义数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                fun01</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> keyCode</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">keyCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">keyCode</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 49</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> keyCode</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">57</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                        //阻止事件执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">                        e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">preventDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="鼠标移入事件" tabindex="-1"><a class="header-anchor" href="#鼠标移入事件"><span>鼠标移入事件</span></a></h3><ul><li><strong>@mouseover</strong></li></ul><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符"><span>事件修饰符：</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.stop     // 停止触发，阻止冒泡修饰符 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.prevent  // 阻止事件发生，阻止事件默认行为</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.capture  // 捕获 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.self     // 只点自己身上才运行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.once     // 只执行一次</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按键修饰符" tabindex="-1"><a class="header-anchor" href="#按键修饰符"><span>按键修饰符：</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.enter  // 表示键盘的enter键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.tab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.delete (捕获 &quot;删除&quot; 和 &quot;退格&quot; 键)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.esc</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.space</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.up</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.down</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.left</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.right</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.ctrl</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.alt</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.shift</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.meta</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3><ul><li><code>插值语法不能作用在HTML 属性上，遇到这种情况应该使用 v-bind指令</code></li><li><code> &lt;font v-bind:color=&quot;ys&quot;&gt;hello world&lt;/font&gt; &lt;a :href=&quot;info&quot;&gt;百度&lt;/a&gt;</code></li></ul><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h3><ul><li><code>用户名:&lt;input type=&quot;text&quot; v-model=&quot;user.username&quot;&gt;&lt;br&gt;</code></li></ul><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(item,index) in array&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            {{index}}---{{item}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model-1" tabindex="-1"><a class="header-anchor" href="#v-model-1"><span>v-model</span></a></h3><ul><li><code> &lt;span v-if=&quot;flag&quot;&gt;hello&lt;/span&gt;</code></li><li><code> &lt;span v-show=&quot;flag&quot;&gt;你好&lt;/span&gt;</code></li></ul><h2 id="vuejs生命周期" tabindex="-1"><a class="header-anchor" href="#vuejs生命周期"><span>VueJS生命周期</span></a></h2><ul><li>beforeCreate ：数据还没有监听，没有绑定到vue对象实例，同时也没有挂载对象</li><li>created ：数据已经绑定到了对象实例，但是还没有挂载对象（使用ajax可在此方法中查询数据，调用函数）</li><li>beforeMount: 模板已经编译好了，根据数据和模板已经生成了对应的元素对象，将数据对象关联到了对象的</li><li>el属性，el属性是一个HTMLElement对象，也就是这个阶段，vue实例通过原生的createElement等方法来创建这个html片段，准备注入到我们vue实例指明的el属性所对应的挂载点</li><li>mounted:将el的内容挂载到了el，相当于我们在jquery执行了(el).html(el),生成页面上真正的dom，上面我们就会发现dom的元素和我们el的元素是一致的。在此之后，我们能够用方法来获取到el元素下的dom对象，并进行各种操作当我们的data发生改变时，会调用beforeUpdate和updated方法</li><li>beforeUpdate ：数据更新到dom之前，我们可以看到$el对象已经修改，但是我们页面上dom的数据还没有发生改变</li><li>updated: dom结构会通过虚拟dom的原则，找到需要更新页面dom结构的最小路径，将改变更新到dom上面，完成更新</li><li>beforeDestroy,destroed :实例的销毁，vue实例还是存在的，只是解绑了事件的监听、还有watcher对象数据与view的绑定，即数据驱动</li></ul>`,28)]))}const d=i(e,[["render",t]]),r=JSON.parse('{"path":"/article/code/vue%E5%9F%BA%E7%A1%80.html","title":"Vue项目部署","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2021-03-20T00:00:00.000Z","category":["技术"],"tag":["Vue","前端"],"description":"Vue项目部署 项目初始化： 安装node与npm或者cnpm cnpm:npm install cnpm -g --registry=https://registry.npm.taobao.org 官方下载：node 全局安装vue-cil：cnpm install -g vue-cli 项目初始化:vue init webpack ps:会有一堆配...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/vue%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"Chione"}],["meta",{"property":"og:title","content":"Vue项目部署"}],["meta",{"property":"og:description","content":"Vue项目部署 项目初始化： 安装node与npm或者cnpm cnpm:npm install cnpm -g --registry=https://registry.npm.taobao.org 官方下载：node 全局安装vue-cil：cnpm install -g vue-cli 项目初始化:vue init webpack ps:会有一堆配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue项目部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":2.87,"words":860},"filePathRelative":"article/code/vue基础.md","localizedDate":"2021年3月20日","excerpt":"\\n<h2>项目初始化：</h2>\\n<ul>\\n<li>安装<code>node</code>与<code>npm</code>或者<code>cnpm</code>\\n<ul>\\n<li><code>cnpm</code>:<code>npm install cnpm -g --registry=https://registry.npm.taobao.org</code></li>\\n<li><a href=\\"https://nodejs.org/en/download/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方下载：<code>node</code></a></li>\\n</ul>\\n</li>\\n<li>全局安装<code>vue-cil</code>：<code>cnpm install -g vue-cli </code></li>\\n<li>项目初始化:<code>vue init webpack</code>   <strong>ps:会有一堆配置</strong></li>\\n<li>初始化项目依赖：<code>cnpm install </code></li>\\n<li>启动项目：<code>npm run dev</code> <strong>ps:可以配置编译器启动</strong></li>\\n</ul>","autoDesc":true}');export{d as comp,r as data};
