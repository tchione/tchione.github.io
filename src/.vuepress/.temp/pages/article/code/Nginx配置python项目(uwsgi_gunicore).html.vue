<template><div><h1 id="django项目部署" tabindex="-1"><a class="header-anchor" href="#django项目部署"><span>Django项目部署</span></a></h1>
<h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化"><span>项目初始化：</span></a></h2>
<p>gunicorn -c <a href="http://gunicorn.py" target="_blank" rel="noopener noreferrer">gunicorn.py</a> my_dhblog.wsgi:application</p>
<ul>
<li>pipenv shell 进入pipenv虚拟环境</li>
<li>pipenv sync 安装依赖</li>
<li>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py</a> makemigrations 数据库迁移</li>
<li>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py</a> migrate 数据库迁移2</li>
</ul>
<h2 id="uwsgi部署" tabindex="-1"><a class="header-anchor" href="#uwsgi部署"><span>uwsgi部署</span></a></h2>
<h3 id="uwsgi依赖" tabindex="-1"><a class="header-anchor" href="#uwsgi依赖"><span>uwsgi依赖</span></a></h3>
<ul>
<li>pip install uwsgi</li>
</ul>
<h3 id="uwsgi配置文件" tabindex="-1"><a class="header-anchor" href="#uwsgi配置文件"><span>uwsgi配置文件</span></a></h3>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>;http=0.0.0.0:8000 #直接做web服务器</span></span>
<span class="line"><span>socket=127.0.0.1:8888 #nginx代理</span></span>
<span class="line"><span>chdir=/home/ubuntu/Tgame_B/pre #项目路径</span></span>
<span class="line"><span>wsgi-file=pre/wsgi.py #wsgi文件路径</span></span>
<span class="line"><span>master=True</span></span>
<span class="line"><span>processes=3 #进程数</span></span>
<span class="line"><span>threads=1 #线程数</span></span>
<span class="line"><span>daemonize=../pre/uwsgi.log #日志文件</span></span>
<span class="line"><span>pidfile=..pre/uwsgi.pid #启动后uwsgi进程号</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uwsgi基本命令" tabindex="-1"><a class="header-anchor" href="#uwsgi基本命令"><span>uwsgi基本命令</span></a></h3>
<ul>
<li>uwsgi --ini  uwsgi.ini #启动</li>
<li>uwsgi --stop uwsgi.pid #停止</li>
</ul>
<h3 id="nginx配置uwsgi" tabindex="-1"><a class="header-anchor" href="#nginx配置uwsgi"><span>nginx配置uwsgi</span></a></h3>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>server{</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        server_name  0.0.0.0;</span></span>
<span class="line"><span>        #动态资源请求uwsgi服务器</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>                include /usr/local/etc/nginx/uwsgi_params;</span></span>
<span class="line"><span>                include mime.types;</span></span>
<span class="line"><span>                uwsgi_pass 127.0.0.1:8888;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>         #静态资源</span></span>
<span class="line"><span>        location /static {</span></span>
<span class="line"><span>                alias  /Users/moric/tian/tian/game-box/static;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>        }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的nginx项目部署" tabindex="-1"><a class="header-anchor" href="#vue的nginx项目部署"><span>vue的nginx项目部署</span></a></h3>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>server{</span></span>
<span class="line"><span>     listen 80;</span></span>
<span class="line"><span>     root "/root/T_Sama/dist";</span></span>
<span class="line"><span>     location / {</span></span>
<span class="line"><span>                index index.html index.html;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>      }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uwsgi-dwebsocket项目部署" tabindex="-1"><a class="header-anchor" href="#uwsgi-dwebsocket项目部署"><span>uwsgi+dwebsocket项目部署</span></a></h3>
<ul>
<li><strong>ps:</strong> dwebsocket我失败了用的gunicore</li>
</ul>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>        server{</span></span>
<span class="line"><span>                listen 8080;</span></span>
<span class="line"><span>                #动态资源</span></span>
<span class="line"><span>                location / {</span></span>
<span class="line"><span>                        include uwsgi_params;</span></span>
<span class="line"><span>                        uwsgi_pass 127.0.0.1:8888;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                #websocket资源</span></span>
<span class="line"><span>                location ~/ws_co {</span></span>
<span class="line"><span>                        include uwsgi_params;</span></span>
<span class="line"><span>                        uwsgi_pass 127.0.0.1:8888;</span></span>
<span class="line"><span>                        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>                        proxy_set_header Connection "upgrade";</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                #静态资源</span></span>
<span class="line"><span>                location /static {</span></span>
<span class="line"><span>                        alias  /root/T_Sama/my_dhblog/static/;</span></span>
<span class="line"><span>                          }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        #vue项目</span></span>
<span class="line"><span>        server{</span></span>
<span class="line"><span>             listen 80;</span></span>
<span class="line"><span>             root "/root/T_Sama/dist";</span></span>
<span class="line"><span>             location / {</span></span>
<span class="line"><span>                        index index.html index.html;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>              }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx命令" tabindex="-1"><a class="header-anchor" href="#nginx命令"><span>nginx命令</span></a></h3>
<ul>
<li>nginx -s stop #停止</li>
<li>nginx #启动</li>
<li>nginx -d 绝对路径nginx配置文件 #选择配置文件启动</li>
</ul>
<h2 id="gunicore部署" tabindex="-1"><a class="header-anchor" href="#gunicore部署"><span>gunicore部署</span></a></h2>
<h3 id="gunicore依赖" tabindex="-1"><a class="header-anchor" href="#gunicore依赖"><span>gunicore依赖</span></a></h3>
<ul>
<li>pip install gunicore</li>
<li>pip install wheel</li>
<li>pip install gevent</li>
</ul>
<h3 id="gunicore配置文件" tabindex="-1"><a class="header-anchor" href="#gunicore配置文件"><span>gunicore配置文件</span></a></h3>
<ul>
<li><a href="http://xn--manage-200k.py" target="_blank" rel="noopener noreferrer">在manage.py</a> 目录下</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>#gunicorn.py</span></span>
<span class="line"><span>import logging</span></span>
<span class="line"><span>import logging.handlers</span></span>
<span class="line"><span>from logging.handlers import WatchedFileHandler</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import multiprocessing</span></span>
<span class="line"><span>bind = '127.0.0.1:8000'  # 绑定ip和端口号</span></span>
<span class="line"><span>backlog = 512  # 监听队列</span></span>
<span class="line"><span>chdir = '/home/CSJ_Live'  # gunicorn要切换到的目的工作目录</span></span>
<span class="line"><span>worker_class = 'gevent'  # 使用gevent模式，还可以使用sync 模式，默认的是sync模式</span></span>
<span class="line"><span>#workers = multiprocessing.cpu_count() * 2 + 1  # 进程数(多进程数据不互通，默认workers为1，单进程模式)</span></span>
<span class="line"><span>loglevel = 'info'  # 日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置</span></span>
<span class="line"><span>errorlog = '../logs/gunicorn.error.log'  #错误日志</span></span>
<span class="line"><span>accesslog = '../logs/gunicorn.access.log' #访问日志</span></span>
<span class="line"><span>daemon = True # 后台运行</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gunicore启动命令" tabindex="-1"><a class="header-anchor" href="#gunicore启动命令"><span>gunicore启动命令</span></a></h3>
<ul>
<li>gunicorn -c <a href="http://gunicorn.py" target="_blank" rel="noopener noreferrer">gunicorn.py</a> CSJ_Live.wsgi:application</li>
</ul>
<h3 id="nginx配置gunicorn-websoket" tabindex="-1"><a class="header-anchor" href="#nginx配置gunicorn-websoket"><span>nginx配置gunicorn+websoket</span></a></h3>
<div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        server_name 域名; </span></span>
<span class="line"><span>        charset utf-8;</span></span>
<span class="line"><span>        # gunicorn配置</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>                # gunicorn配置</span></span>
<span class="line"><span>                proxy_pass http://127.0.0.1:8000;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        # 处理websocket请求</span></span>
<span class="line"><span>        location ~ /viewer/chat_room {</span></span>
<span class="line"><span>                # gunicorn配置</span></span>
<span class="line"><span>                proxy_pass http://127.0.0.1:8000;</span></span>
<span class="line"><span>                proxy_http_version 1.1;</span></span>
<span class="line"><span>                proxy_redirect off;</span></span>
<span class="line"><span>                proxy_set_header Host $host;</span></span>
<span class="line"><span>                proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>                # 下面两行是重点</span></span>
<span class="line"><span>                proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>                proxy_set_header Connection "upgrade";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


