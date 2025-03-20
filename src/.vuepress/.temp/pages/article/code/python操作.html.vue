<template><div><h1 id="python操作技巧" tabindex="-1"><a class="header-anchor" href="#python操作技巧"><span>Python操作技巧</span></a></h1>
<hr>
<h2 id="字典-dict" tabindex="-1"><a class="header-anchor" href="#字典-dict"><span>字典（dict）：</span></a></h2>
<h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建：</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span># 1、创建空字典</span></span>
<span class="line"><span>a = {}</span></span>
<span class="line"><span>b = dict()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2、有初始值</span></span>
<span class="line"><span>a = {'a': 1, 'b': 2, 'c': 3}</span></span>
<span class="line"><span>b = dict(a=1, b=2, c=3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3、key 来自一个列表，而 value 相同, 使用 fromkeys</span></span>
<span class="line"><span>keys = ['a', 'b', 'c']</span></span>
<span class="line"><span>value = 100</span></span>
<span class="line"><span>d = dict.fromkeys(keys, value)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4、key 来自一个列表，而 value 也是一个列表，使用 zip</span></span>
<span class="line"><span>keys = ['a', 'b', 'c']</span></span>
<span class="line"><span>values = [1, 2, 3]</span></span>
<span class="line"><span>d = dict(zip(keys, values))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并"><span>合并</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>m = {'a': 1}</span></span>
<span class="line"><span>n = {'b': 2, 'c': 3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并，两种方式</span></span>
<span class="line"><span># 1、使用 update</span></span>
<span class="line"><span>m.update(n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2、使用 **</span></span>
<span class="line"><span>{**m, **n}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断key" tabindex="-1"><a class="header-anchor" href="#判断key"><span>判断key</span></a></h3>
<ul>
<li><code v-pre>a={} ; if 'w' in a:</code></li>
</ul>
<h3 id="获取" tabindex="-1"><a class="header-anchor" href="#获取"><span>获取</span></a></h3>
<ul>
<li><code v-pre>a={'w':1}   a['w']</code></li>
<li><code v-pre>a={'w':1}   a.get('w')</code></li>
</ul>
<h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3>
<ul>
<li><code v-pre>{}.keys()</code></li>
<li><code v-pre>{}.values()</code></li>
<li><code v-pre>{}.items()</code></li>
</ul>
<h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h3>
<ul>
<li><code v-pre>sorted(d.items(), key=lambda t: t[0], reverse=True)</code></li>
<li><strong>ps:列表通过value排序:</strong>
<ul>
<li><code v-pre>l = [{'name': 'a', 'count': 4}, {'name': 'b', 'count': 1}, {'name': 'd', 'count': 2}, {'name': 'c', 'count': 6}]</code></li>
<li><code v-pre>sorted(l, key=lambda e: e.__getitem__('count'), reverse=True)</code></li>
</ul>
</li>
</ul>
<h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list"><span>列表（list）</span></a></h2>
<h3 id="合并-1" tabindex="-1"><a class="header-anchor" href="#合并-1"><span>合并</span></a></h3>
<ul>
<li><code v-pre>[].append(item)</code></li>
<li><code v-pre>[]+items</code></li>
<li><code v-pre>[].extend(items)</code></li>
</ul>
<h3 id="去重" tabindex="-1"><a class="header-anchor" href="#去重"><span>去重</span></a></h3>
<ul>
<li><code v-pre>list(set(items))</code></li>
</ul>
<h3 id="统计次数" tabindex="-1"><a class="header-anchor" href="#统计次数"><span>统计次数</span></a></h3>
<ul>
<li><code v-pre>from collections import Counter</code></li>
</ul>
<h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2>
<h3 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构"><span>基本结构</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span># 1、第一行必须是 FROM 基础镜像信息</span></span>
<span class="line"><span>FROM ubuntu</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 2、维护者信息</span></span>
<span class="line"><span>MAINTAINER docker_user docker_user@email.com</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 3、镜像操作指令</span></span>
<span class="line"><span>RUN echo "deb http://archive.ubuntu.com/ubuntu/ raring main universe" >> /etc/apt/sources.list</span></span>
<span class="line"><span>RUN apt-get update &#x26;&#x26; apt-get install -y nginx</span></span>
<span class="line"><span>RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 4、容器启动执行指令</span></span>
<span class="line"><span>CMD /usr/sbin/nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>PS:有几点需要注意，第一行必须是 FROM 命令，表示是基于哪个基础镜像来创建镜像的。第二行一般是 MAINTAINER 命令，表示维护人信息，但不做硬性要求。最后一行是 CMD 命令，表示启动容器执行的命令，CMD 命令必须在最后一行，如果有多个 CMD 命令，则只有最后一个生效。</strong></li>
</ul>
<h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h3>
<ul>
<li>**FROM：**必须是 Dockerfile 的首个命令，定义了使用哪个基础镜像启动构建流程。</li>
<li><strong>MAINTAINER：</strong> 声明镜像作者。</li>
<li><strong>COPY：</strong> 将宿主机的文件拷贝到镜像内的指定路径。</li>
<li><strong>ADD：</strong> 作用类似于 <strong>COPY</strong>。</li>
<li><strong>COPY</strong> 和 <strong>ADD</strong> 的区别是：<strong>ADD</strong> 命令功能更多，比如拷贝一个压缩包，<strong>ADD</strong> 可以将压缩包解压到镜像内，如果是下载链接，<strong>ADD</strong> 会先下载文件，然后再拷贝。<br>
但现在 docker 官方更推荐使用 <strong>COPY</strong> 命令，一个命令只做一件事。</li>
<li>**WORKDIR:**指定 Dockerfile 中该命令下的操作所在的工作目录。</li>
<li><strong>RUN：</strong> 执行命令行命令。</li>
<li><strong>ENV：</strong> 设置环境变量。</li>
<li><strong>VOLUME：</strong> 挂载数据卷。</li>
<li><strong>EXPOSE：</strong> 暴露端口。</li>
<li><strong>CMD：</strong> 服务启动命令。</li>
</ul>
<h3 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像"><span>创建镜像</span></a></h3>
<ul>
<li><code v-pre>docker build -t &lt;image_name&gt; .</code></li>
</ul>
<h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h2>
<ul>
<li>普通枚举
<ul>
<li><code v-pre>enum.Enum</code></li>
</ul>
</li>
<li>可排序枚举
<ul>
<li><code v-pre>enum.IntEnum</code></li>
</ul>
</li>
<li>唯一枚举
<ul>
<li><code v-pre>@enum.unique</code></li>
</ul>
</li>
</ul>
<h2 id="functools模块" tabindex="-1"><a class="header-anchor" href="#functools模块"><span>functools模块</span></a></h2>
<h3 id="partial-partialmethod类似" tabindex="-1"><a class="header-anchor" href="#partial-partialmethod类似"><span>partial(partialmethod类似)</span></a></h3>
<ul>
<li>返回一个新的函数</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>from functools import partial</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def add(x, y):</span></span>
<span class="line"><span>    return x + y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add_y = partial(add, 3)  # add_y 是一个新的函数</span></span>
<span class="line"><span>add_y(4) # 7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wraps装饰器" tabindex="-1"><a class="header-anchor" href="#wraps装饰器"><span>wraps装饰器</span></a></h3>
<ul>
<li>保留函数原本的<code v-pre>__name__</code>值</li>
</ul>
<h3 id="lru-cache装饰器" tabindex="-1"><a class="header-anchor" href="#lru-cache装饰器"><span>lru_cache装饰器</span></a></h3>
<ul>
<li>缓存函数的调用结果（下次不经过函数直接返回结果）</li>
</ul>
<h2 id="itertools模块" tabindex="-1"><a class="header-anchor" href="#itertools模块"><span>itertools模块</span></a></h2>
<h3 id="count-无限迭代" tabindex="-1"><a class="header-anchor" href="#count-无限迭代"><span>count()：无限迭代</span></a></h3>
<h3 id="cycle-无限重复可迭代序列内的值" tabindex="-1"><a class="header-anchor" href="#cycle-无限重复可迭代序列内的值"><span>cycle()：无限重复可迭代序列内的值</span></a></h3>
<h3 id="repeat-无限返回传入对象-可限制次数" tabindex="-1"><a class="header-anchor" href="#repeat-无限返回传入对象-可限制次数"><span>repeat(): 无限返回传入对象，可限制次数</span></a></h3>
<h3 id="product-生成笛卡尔积" tabindex="-1"><a class="header-anchor" href="#product-生成笛卡尔积"><span>product():生成笛卡尔积</span></a></h3>
<h3 id="permutations-全排列" tabindex="-1"><a class="header-anchor" href="#permutations-全排列"><span>permutations() 全排列</span></a></h3>
<h3 id="compress" tabindex="-1"><a class="header-anchor" href="#compress"><span>compress</span></a></h3>
<ul>
<li>bool选取</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>In [39]: list(itertools.compress('abcdef', [1, 1, 0, 1, 0, 1]))</span></span>
<span class="line"><span>Out[39]: ['a', 'b', 'd', 'f']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In [40]: list(itertools.compress('abcdef', [True, False, True]))</span></span>
<span class="line"><span>Out[40]: ['a', 'c']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby"><span>groupby</span></a></h3>
<ul>
<li>数据分组(先排序)</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>In [45]: for key, value_iter in itertools.groupby('aaabbbaaccd'):</span></span>
<span class="line"><span>   ....:     print key, list(value_iter)</span></span>
<span class="line"><span>   ....:     </span></span>
<span class="line"><span>a ['a', 'a', 'a']</span></span>
<span class="line"><span>b ['b', 'b', 'b']</span></span>
<span class="line"><span>a ['a', 'a']</span></span>
<span class="line"><span>c ['c', 'c']</span></span>
<span class="line"><span>d ['d']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In [48]: data = ['a', 'bb', 'cc', 'ddd', 'eee', 'f']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In [49]: for key, value_iter in itertools.groupby(data, len):</span></span>
<span class="line"><span>   ....:     print key, list(value_iter)</span></span>
<span class="line"><span>   ....:     </span></span>
<span class="line"><span>1 ['a']</span></span>
<span class="line"><span>2 ['bb', 'cc']</span></span>
<span class="line"><span>3 ['ddd', 'eee']</span></span>
<span class="line"><span>1 ['f']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


