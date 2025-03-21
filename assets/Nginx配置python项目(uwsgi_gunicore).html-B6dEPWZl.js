import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as e}from"./app-PMTzUK1j.js";const l={};function p(r,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="django项目部署" tabindex="-1"><a class="header-anchor" href="#django项目部署"><span>Django项目部署</span></a></h1><h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化"><span>项目初始化：</span></a></h2><p>gunicorn -c <a href="http://gunicorn.py" target="_blank" rel="noopener noreferrer">gunicorn.py</a> my_dhblog.wsgi:application</p><ul><li>pipenv shell 进入pipenv虚拟环境</li><li>pipenv sync 安装依赖</li><li>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py</a> makemigrations 数据库迁移</li><li>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py</a> migrate 数据库迁移2</li></ul><h2 id="uwsgi部署" tabindex="-1"><a class="header-anchor" href="#uwsgi部署"><span>uwsgi部署</span></a></h2><h3 id="uwsgi依赖" tabindex="-1"><a class="header-anchor" href="#uwsgi依赖"><span>uwsgi依赖</span></a></h3><ul><li>pip install uwsgi</li></ul><h3 id="uwsgi配置文件" tabindex="-1"><a class="header-anchor" href="#uwsgi配置文件"><span>uwsgi配置文件</span></a></h3><div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>;http=0.0.0.0:8000 #直接做web服务器</span></span>
<span class="line"><span>socket=127.0.0.1:8888 #nginx代理</span></span>
<span class="line"><span>chdir=/home/ubuntu/Tgame_B/pre #项目路径</span></span>
<span class="line"><span>wsgi-file=pre/wsgi.py #wsgi文件路径</span></span>
<span class="line"><span>master=True</span></span>
<span class="line"><span>processes=3 #进程数</span></span>
<span class="line"><span>threads=1 #线程数</span></span>
<span class="line"><span>daemonize=../pre/uwsgi.log #日志文件</span></span>
<span class="line"><span>pidfile=..pre/uwsgi.pid #启动后uwsgi进程号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uwsgi基本命令" tabindex="-1"><a class="header-anchor" href="#uwsgi基本命令"><span>uwsgi基本命令</span></a></h3><ul><li>uwsgi --ini uwsgi.ini #启动</li><li>uwsgi --stop uwsgi.pid #停止</li></ul><h3 id="nginx配置uwsgi" tabindex="-1"><a class="header-anchor" href="#nginx配置uwsgi"><span>nginx配置uwsgi</span></a></h3><div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server{</span></span>
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
<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的nginx项目部署" tabindex="-1"><a class="header-anchor" href="#vue的nginx项目部署"><span>vue的nginx项目部署</span></a></h3><div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server{</span></span>
<span class="line"><span>     listen 80;</span></span>
<span class="line"><span>     root &quot;/root/T_Sama/dist&quot;;</span></span>
<span class="line"><span>     location / {</span></span>
<span class="line"><span>                index index.html index.html;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>      }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uwsgi-dwebsocket项目部署" tabindex="-1"><a class="header-anchor" href="#uwsgi-dwebsocket项目部署"><span>uwsgi+dwebsocket项目部署</span></a></h3><ul><li><strong>ps:</strong> dwebsocket我失败了用的gunicore</li></ul><div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        server{</span></span>
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
<span class="line"><span>                        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                #静态资源</span></span>
<span class="line"><span>                location /static {</span></span>
<span class="line"><span>                        alias  /root/T_Sama/my_dhblog/static/;</span></span>
<span class="line"><span>                          }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        #vue项目</span></span>
<span class="line"><span>        server{</span></span>
<span class="line"><span>             listen 80;</span></span>
<span class="line"><span>             root &quot;/root/T_Sama/dist&quot;;</span></span>
<span class="line"><span>             location / {</span></span>
<span class="line"><span>                        index index.html index.html;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>              }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx命令" tabindex="-1"><a class="header-anchor" href="#nginx命令"><span>nginx命令</span></a></h3><ul><li>nginx -s stop #停止</li><li>nginx #启动</li><li>nginx -d 绝对路径nginx配置文件 #选择配置文件启动</li></ul><h2 id="gunicore部署" tabindex="-1"><a class="header-anchor" href="#gunicore部署"><span>gunicore部署</span></a></h2><h3 id="gunicore依赖" tabindex="-1"><a class="header-anchor" href="#gunicore依赖"><span>gunicore依赖</span></a></h3><ul><li>pip install gunicore</li><li>pip install wheel</li><li>pip install gevent</li></ul><h3 id="gunicore配置文件" tabindex="-1"><a class="header-anchor" href="#gunicore配置文件"><span>gunicore配置文件</span></a></h3><ul><li><a href="http://xn--manage-200k.py" target="_blank" rel="noopener noreferrer">在manage.py</a> 目录下</li></ul><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#gunicorn.py</span></span>
<span class="line"><span>import logging</span></span>
<span class="line"><span>import logging.handlers</span></span>
<span class="line"><span>from logging.handlers import WatchedFileHandler</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import multiprocessing</span></span>
<span class="line"><span>bind = &#39;127.0.0.1:8000&#39;  # 绑定ip和端口号</span></span>
<span class="line"><span>backlog = 512  # 监听队列</span></span>
<span class="line"><span>chdir = &#39;/home/CSJ_Live&#39;  # gunicorn要切换到的目的工作目录</span></span>
<span class="line"><span>worker_class = &#39;gevent&#39;  # 使用gevent模式，还可以使用sync 模式，默认的是sync模式</span></span>
<span class="line"><span>#workers = multiprocessing.cpu_count() * 2 + 1  # 进程数(多进程数据不互通，默认workers为1，单进程模式)</span></span>
<span class="line"><span>loglevel = &#39;info&#39;  # 日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置</span></span>
<span class="line"><span>errorlog = &#39;../logs/gunicorn.error.log&#39;  #错误日志</span></span>
<span class="line"><span>accesslog = &#39;../logs/gunicorn.access.log&#39; #访问日志</span></span>
<span class="line"><span>daemon = True # 后台运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gunicore启动命令" tabindex="-1"><a class="header-anchor" href="#gunicore启动命令"><span>gunicore启动命令</span></a></h3><ul><li>gunicorn -c <a href="http://gunicorn.py" target="_blank" rel="noopener noreferrer">gunicorn.py</a> CSJ_Live.wsgi:application</li></ul><h3 id="nginx配置gunicorn-websoket" tabindex="-1"><a class="header-anchor" href="#nginx配置gunicorn-websoket"><span>nginx配置gunicorn+websoket</span></a></h3><div class="language-nashorn line-numbers-mode" data-highlighter="shiki" data-ext="nashorn" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
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
<span class="line"><span>                proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30)]))}const t=s(l,[["render",p]]),o=JSON.parse('{"path":"/article/code/Nginx%E9%85%8D%E7%BD%AEpython%E9%A1%B9%E7%9B%AE(uwsgi_gunicore).html","title":"Django项目部署","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2021-03-20T00:00:00.000Z","category":["技术"],"tag":["Python","后端","Django"],"description":"Django项目部署 项目初始化： gunicorn -c gunicorn.py my_dhblog.wsgi:application pipenv shell 进入pipenv虚拟环境 pipenv sync 安装依赖 python manage.py makemigrations 数据库迁移 python manage.py migrate 数据...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/Nginx%E9%85%8D%E7%BD%AEpython%E9%A1%B9%E7%9B%AE(uwsgi_gunicore).html"}],["meta",{"property":"og:site_name","content":"Chione"}],["meta",{"property":"og:title","content":"Django项目部署"}],["meta",{"property":"og:description","content":"Django项目部署 项目初始化： gunicorn -c gunicorn.py my_dhblog.wsgi:application pipenv shell 进入pipenv虚拟环境 pipenv sync 安装依赖 python manage.py makemigrations 数据库迁移 python manage.py migrate 数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"Django"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Django项目部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"article/code/Nginx配置python项目(uwsgi_gunicore).md","localizedDate":"2021年3月20日","excerpt":"\\n<h2>项目初始化：</h2>\\n<p>gunicorn -c <a href=\\"http://gunicorn.py\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">gunicorn.py</a> my_dhblog.wsgi:application</p>\\n<ul>\\n<li>pipenv shell 进入pipenv虚拟环境</li>\\n<li>pipenv sync 安装依赖</li>\\n<li>python <a href=\\"http://manage.py\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">manage.py</a> makemigrations 数据库迁移</li>\\n<li>python <a href=\\"http://manage.py\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">manage.py</a> migrate 数据库迁移2</li>\\n</ul>","autoDesc":true}');export{t as comp,o as data};
