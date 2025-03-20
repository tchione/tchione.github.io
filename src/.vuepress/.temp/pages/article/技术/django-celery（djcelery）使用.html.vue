<template><div><h1 id="django-celery" tabindex="-1"><a class="header-anchor" href="#django-celery"><span>django-celery</span></a></h1>
<ul>
<li>1 安装(djcelery)：
<ul>
<li>pip install django-celery</li>
</ul>
</li>
<li>2.配置：
<ul>
<li><code v-pre>CELERYBEAT_SCHEDULER、BROKER_URL、CELERY_RESULT_BACKEND</code>也可以设置MQ，或者直接不写使用默认的mysql数据库，使用mysql后迁移数据库就可在数据库看到关于djcelery的表。</li>
<li>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>import djcelery</span></span>
<span class="line"><span>INSTALLED_APPS = [</span></span>
<span class="line"><span>    .....,</span></span>
<span class="line"><span>  'djcelery',</span></span>
<span class="line"><span>    .....</span></span>
<span class="line"><span>  ]   </span></span>
<span class="line"><span>  djcelery.setup_loader()</span></span>
<span class="line"><span>  BROKER_URL = 'redis://127.0.0.1:6379/4'  # 使用redid做broker，消息代理、队列</span></span>
<span class="line"><span>  CELERYBEAT_SCHEDULER = 'redis://127.0.0.1:6379/5'  # 这是使用了django-celery默认的数据库调度模型,任务执行周期都被存在你指定的orm数据库中</span></span>
<span class="line"><span>  CELERY_RESULT_BACKEND = 'redis://127.0.0.1:6379/6'  # 需要跟踪任务的状态时保存结果和状态，结果存储</span></span>
<span class="line"><span>  CELERY_TIMEZONE = 'Asia/Shanghai'  # 默认上海时区</span></span>
<span class="line"><span>  CELERY_ACCEPT_CONTENT = ['pickle', 'json', 'msgpack', 'yaml']</span></span>
<span class="line"><span>  CELERY_TASK_SERIALIZER = 'json'</span></span>
<span class="line"><span>  CELERY_RESULT_SERIALIZER = 'json'</span></span>
<span class="line"><span>  CELERY_IMPORTS = ("app.tasks",) #注册tasks，app名字点tasks， 要不然智障系统找不到。</span></span>
<span class="line"><span>  CELERYD_TASK_TIME_LIMIT = 20  #（celery任务最长执行时间，超时kill）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>3.迁移数据库：
<ul>
<li><code v-pre>python manage.py migrate</code></li>
<li><code v-pre>python manage.py makemigrations</code></li>
</ul>
</li>
<li>4.在随便app下创建tasks.py文件：
<ul>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> celery.task</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> task</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">@task</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">def</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> asdasdasd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">q,w</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> w</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>5.在view中调用：
<ul>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> app.tasks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> asdasdasd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">class</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TestView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">View</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    def</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">self,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        asdasdasd.delay(a,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> JsonResponse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({code:200})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>6.启动项目：
<ul>
<li><code v-pre>python manage runserver 8000</code>(测试环境下启动)</li>
<li><code v-pre>python manage.py celery worker --loglevel=info</code></li>
</ul>
</li>
<li>7.访问TestView类的接口就可以看到异步成功执行了</li>
</ul>
</div></template>


