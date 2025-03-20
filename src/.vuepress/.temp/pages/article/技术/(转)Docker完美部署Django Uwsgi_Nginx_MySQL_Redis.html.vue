<template><div><h1 id="转-docker完美部署django-uwsgi-nginx-mysql-redis" tabindex="-1"><a class="header-anchor" href="#转-docker完美部署django-uwsgi-nginx-mysql-redis"><span>(转)Docker完美部署Django Uwsgi+Nginx+MySQL+Redis</span></a></h1>
<p><strong>PS原地址:<a href="https://zhuanlan.zhihu.com/p/145364353" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/145364353</a></strong></p>
<h3 id="什么是docker-compose及docker-compose工具的安装" tabindex="-1"><a class="header-anchor" href="#什么是docker-compose及docker-compose工具的安装"><span>什么是docker-compose及docker-compose工具的安装</span></a></h3>
<ul>
<li>
<p>Docker-compose是一个用来定义和运行复杂应用的 Docker 工具。使用 docker-compose 后不再需要使用 shell 脚本来逐一创建和启动容器，还可以通过 docker-compose.yml 文件构建和管理复杂多容器组合。</p>
</li>
<li>
<p>Docker-compose的下载和安装很简单，网上有很多教程，我就不再详述了。这里只记录下ubuntu系统下docker-compose的安装过程。</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Step 1: 以ubuntu为例，下载docker-compose</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sudo curl </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">L https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">github.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">compose</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">releases</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">download</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1.17</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">compose</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">`uname </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">s`</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">`uname </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">m`</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">o </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">local</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">compose</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Step 2: 给予docker-compose可执行权限</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sudo chmod </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">local</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">compose</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Step 3: 查看docker-compose版本</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">compose </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：安装docker-compose前必需先安装好docker。</strong></p>
<h3 id="django-uwsgi-nginx-mysql-redis组合容器示意图" tabindex="-1"><a class="header-anchor" href="#django-uwsgi-nginx-mysql-redis组合容器示意图"><span>Django + Uwsgi + Nginx + MySQL + Redis组合容器示意图</span></a></h3>
<ul>
<li>本例中我们将使用docker-compose编排并启动4个容器，这更接近于实际生成环境下的部署。</li>
</ul>
<ol>
<li>Django + Uwsgi容器：核心应用程序，处理动态请求</li>
<li>MySQL 容器：数据库服务</li>
<li>Redis 容器：缓存服务</li>
<li>Nginx容器：反向代理服务并处理静态资源请求</li>
</ol>
<ul>
<li>这四个容器的依赖关系是：Django+Uwsgi 容器依赖 Redis 容器和 MySQL 容器，Nginx 容器依赖Django+Uwsgi容器。为了方便容器间的相互访问和通信，我们使用docker-compose时可以给每个容器取个别名，这样访问容器时就可以直接使用别名访问，而不使用Docker临时给容器分配的IP了。</li>
</ul>
<h3 id="docker-compose部署django项目布局树形图" tabindex="-1"><a class="header-anchor" href="#docker-compose部署django项目布局树形图"><span>Docker-compose部署Django项目布局树形图</span></a></h3>
<ul>
<li>我们新建了一个compose文件夹，专门存放用于构建其它容器镜像的Dockerfile及配置文件。compose文件夹与django项目的根目录myproject同级。这样做的好处是不同的django项目可以共享compose文件夹。</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> myproject_docker # 项目根目录</span></span>
<span class="line"><span> ├── compose # 存放各项容器服务的Dockerfile和配置文件</span></span>
<span class="line"><span> │   ├── mysql</span></span>
<span class="line"><span> │   │   ├── conf</span></span>
<span class="line"><span> │   │   │   └── my.cnf # MySQL配置文件</span></span>
<span class="line"><span> │   │   └── init</span></span>
<span class="line"><span> │   │       └── init.sql # MySQL启动脚本</span></span>
<span class="line"><span> │   ├── nginx</span></span>
<span class="line"><span> │   │   ├── Dockerfile # 构建Nginx镜像所的Dockerfile</span></span>
<span class="line"><span> │   │   ├── log # 挂载保存nginx容器内nginx日志</span></span>
<span class="line"><span> │   │   ├── nginx.conf # Nginx配置文件</span></span>
<span class="line"><span> │   │   └── ssl # 如果需要配置https需要用到</span></span>
<span class="line"><span> │   ├── redis</span></span>
<span class="line"><span> │   │   └── redis.conf # redis配置文件</span></span>
<span class="line"><span> │   └── uwsgi # 挂载保存django+uwsgi容器内uwsgi日志</span></span>
<span class="line"><span> ├── docker-compose.yml # 核心编排文件</span></span>
<span class="line"><span> └── myproject # 常规Django项目目录</span></span>
<span class="line"><span>    ├── Dockerfile # 构建Django+Uwsgi镜像的Dockerfile</span></span>
<span class="line"><span>    ├── apps # 存放Django项目的各个apps</span></span>
<span class="line"><span>    ├── manage.py</span></span>
<span class="line"><span>    ├── myproject # Django项目配置文件</span></span>
<span class="line"><span>    │   ├── asgi.py</span></span>
<span class="line"><span>    │   ├── __init__.py</span></span>
<span class="line"><span>    │   ├── settings.py</span></span>
<span class="line"><span>    │   ├── urls.py</span></span>
<span class="line"><span>    │   └── wsgi.py</span></span>
<span class="line"><span>    ├── pip.conf # 非必需。pypi源设置成国内，加速pip安装</span></span>
<span class="line"><span>    ├── requirements.txt # Django项目依赖文件</span></span>
<span class="line"><span>    ├── start.sh # 启动Django+Uwsgi容器后要执行的脚本</span></span>
<span class="line"><span>    ├── media # 用户上传的媒体资源与静态文件</span></span>
<span class="line"><span>    ├── static # 项目所使用到的静态文件</span></span>
<span class="line"><span>    └── uwsgi.ini # uwsgi配置文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们开始正式部署。</p>
<h4 id="第一步-编写docker-compose-yml文件" tabindex="-1"><a class="header-anchor" href="#第一步-编写docker-compose-yml文件"><span>第一步：编写docker-compose.yml文件</span></a></h4>
<p>docker-compose.yml的核心内容如下。我们定义了3个数据卷，用于挂载各个容器内动态生成的数据，比如MySQL的存储数据，redis生成的快照和django容器中用户上传的媒体资源与文件。这样即使删除容器，容器内产生的数据也不会丢失。我们还编排了4项容器服务，别名分别为redis, db, nginx和web，接下来我们将依次看看各个容器的Dockerfile和配置文件。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> version: "3"</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> volumes: # 自定义数据卷，位于宿主机/var/lib/docker/volumes内</span></span>
<span class="line"><span>  myproject_db_vol: # 定义数据卷同步容器内mysql数据</span></span>
<span class="line"><span>  myproject_redis_vol: # 定义数据卷同步redis容器内数据</span></span>
<span class="line"><span>  myproject_media_vol: # 定义数据卷同步media文件夹数据</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> services:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    image: redis:5</span></span>
<span class="line"><span>    command: redis-server /etc/redis/redis.conf # 容器启动后启动redis服务器</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>       - myproject_redis_vol:/data # 通过挂载给redis数据备份</span></span>
<span class="line"><span>       - ./compose/redis/redis.conf:/etc/redis/redis.conf # 挂载redis配置文件</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>       - "6379:6379"</span></span>
<span class="line"><span>     restart: always # always表容器运行发生错误时一直重启</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  db:</span></span>
<span class="line"><span>    image: mysql:5.7</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>       - MYSQL_ROOT_PASSWORD=123456 # 数据库密码</span></span>
<span class="line"><span>       - MYSQL_DATABASE=myproject # 数据库名称</span></span>
<span class="line"><span>       - MYSQL_USER=dbuser # 数据库用户名</span></span>
<span class="line"><span>       - MYSQL_PASSWORD=password # 用户密码</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>       - myproject_db_vol:/var/lib/mysql:rw # 挂载数据库数据, 可读可写</span></span>
<span class="line"><span>       - ./compose/mysql/conf/my.cnf:/etc/mysql/my.cnf # 挂载配置文件</span></span>
<span class="line"><span>       - ./compose/mysql/init:/docker-entrypoint-initdb.d/ # 挂载数据初始化sql脚本</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>       - "3306:3306" # 与配置文件保持一致</span></span>
<span class="line"><span>     restart: always</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  web:</span></span>
<span class="line"><span>    build: ./myproject # 使用myproject目录下的Dockerfile</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>       - "8000"</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>       - ./myproject:/var/www/html/myproject # 挂载项目代码</span></span>
<span class="line"><span>       - myproject_media_vol:/var/www/html/myproject/media # 以数据卷挂载容器内用户上传媒体文件</span></span>
<span class="line"><span>       - ./compose/uwsgi:/tmp # 挂载uwsgi日志</span></span>
<span class="line"><span>    links:</span></span>
<span class="line"><span>       - db</span></span>
<span class="line"><span>       - redis</span></span>
<span class="line"><span>    depends_on: # 依赖关系</span></span>
<span class="line"><span>       - db</span></span>
<span class="line"><span>       - redis</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>       - DEBUG=False</span></span>
<span class="line"><span>     restart: always</span></span>
<span class="line"><span>    tty: true</span></span>
<span class="line"><span>    stdin_open: true</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  nginx:</span></span>
<span class="line"><span>    build: ./compose/nginx</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>       - "80:80"</span></span>
<span class="line"><span>       - "443:443"</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>       - "80"</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>       - ./myproject/static:/usr/share/nginx/html/static # 挂载静态文件</span></span>
<span class="line"><span>       - ./compose/nginx/ssl:/usr/share/nginx/ssl # 挂载ssl证书目录</span></span>
<span class="line"><span>       - ./compose/nginx/log:/var/log/nginx # 挂载日志</span></span>
<span class="line"><span>       - myproject_media_vol:/usr/share/nginx/html/media # 挂载用户上传媒体文件</span></span>
<span class="line"><span>    links:</span></span>
<span class="line"><span>       - web</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>       - web</span></span>
<span class="line"><span>     restart: always</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-编写web-django-uwsgi-镜像和容器所需文件" tabindex="-1"><a class="header-anchor" href="#第二步-编写web-django-uwsgi-镜像和容器所需文件"><span>第二步：编写Web (Django+Uwsgi)镜像和容器所需文件</span></a></h4>
<p>构建Web镜像(Django+Uwsgi)的所使用的Dockerfile如下所示:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # myproject/Dockerfile</span></span>
<span class="line"><span> # 建立 python3.7 环境</span></span>
<span class="line"><span> FROM python:3.7</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 镜像作者大江狗</span></span>
<span class="line"><span> MAINTAINER DJG</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置 python 环境变量</span></span>
<span class="line"><span> ENV PYTHONUNBUFFERED 1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> COPY pip.conf /root/.pip/pip.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 创建 myproject 文件夹</span></span>
<span class="line"><span> RUN mkdir -p /var/www/html/myproject</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 将 myproject 文件夹为工作目录</span></span>
<span class="line"><span> WORKDIR /var/www/html/myproject</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 将当前目录加入到工作目录中（. 表示当前目录）</span></span>
<span class="line"><span> ADD . /var/www/html/myproject</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 更新pip版本</span></span>
<span class="line"><span> RUN /usr/local/bin/python -m pip install --upgrade pip</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 利用 pip 安装依赖</span></span>
<span class="line"><span> RUN pip install -r requirements.txt</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 去除windows系统编辑文件中多余的\r回车空格</span></span>
<span class="line"><span> RUN sed -i 's/\r//' ./start.sh</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 给start.sh可执行权限</span></span>
<span class="line"><span> RUN chmod +x ./start.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本Django项目所依赖的<code v-pre>requirements.txt</code>内容如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # django</span></span>
<span class="line"><span> django==3.0.6</span></span>
<span class="line"><span> # uwsgi</span></span>
<span class="line"><span> uwsgi==2.0.18</span></span>
<span class="line"><span> # mysql</span></span>
<span class="line"><span> mysqlclient==1.4.6</span></span>
<span class="line"><span> # redis</span></span>
<span class="line"><span> django-redis==4.11.0</span></span>
<span class="line"><span> redis==3.5.0</span></span>
<span class="line"><span> # for images</span></span>
<span class="line"><span> Pillow==7.1.2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>start.sh</code>脚本文件内容如下所示。最重要的是最后一句，使用uwsgi.ini配置文件启动Django服务。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> #!/bin/bash</span></span>
<span class="line"><span> # 从第一行到最后一行分别表示：</span></span>
<span class="line"><span> # 1. 收集静态文件到根目录，</span></span>
<span class="line"><span> # 2. 生成数据库可执行文件，</span></span>
<span class="line"><span> # 3. 根据数据库可执行文件来修改数据库</span></span>
<span class="line"><span> # 4. 用 uwsgi启动 django 服务</span></span>
<span class="line"><span> python manage.py collectstatic --noinput&#x26;&#x26;</span></span>
<span class="line"><span> python manage.py makemigrations&#x26;&#x26;</span></span>
<span class="line"><span> python manage.py migrate&#x26;&#x26;</span></span>
<span class="line"><span> uwsgi --ini /var/www/html/myproject/uwsgi.ini</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uwsgi.ini配置文件如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> [uwsgi]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> project=myproject</span></span>
<span class="line"><span> uid=www-data</span></span>
<span class="line"><span> gid=www-data</span></span>
<span class="line"><span> base=/var/www/html</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> chdir=%(base)/%(project)</span></span>
<span class="line"><span> module=%(project).wsgi:application</span></span>
<span class="line"><span> master=True</span></span>
<span class="line"><span> processes=2</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> socket=0.0.0.0:8000</span></span>
<span class="line"><span> chown-socket=%(uid):www-data</span></span>
<span class="line"><span> chmod-socket=664</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> vacuum=True</span></span>
<span class="line"><span> max-requests=5000</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> pidfile=/tmp/%(project)-master.pid</span></span>
<span class="line"><span> daemonize=/tmp/%(project)-uwsgi.log</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> #设置一个请求的超时时间(秒)，如果一个请求超过了这个时间，则请求被丢弃</span></span>
<span class="line"><span> harakiri = 60</span></span>
<span class="line"><span> post buffering = 8192</span></span>
<span class="line"><span> buffer-size= 65535</span></span>
<span class="line"><span> #当一个请求被harakiri杀掉会，会输出一条日志</span></span>
<span class="line"><span> harakiri-verbose = true</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> #开启内存使用情况报告</span></span>
<span class="line"><span> memory-report = true</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> #设置平滑的重启（直到处理完接收到的请求）的长等待时间(秒)</span></span>
<span class="line"><span> reload-mercy = 10</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> #设置工作进程使用虚拟内存超过N MB就回收重启</span></span>
<span class="line"><span> reload-on-as= 1024</span></span>
<span class="line"><span> python-autoreload=1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三步-编写nginx镜像和容器所需文件" tabindex="-1"><a class="header-anchor" href="#第三步-编写nginx镜像和容器所需文件"><span>第三步：编写Nginx镜像和容器所需文件</span></a></h4>
<p>构建Nginx镜像所使用的Dockerfile如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # nginx镜像compose/nginx/Dockerfile</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> FROM nginx:latest</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 删除原有配置文件，创建静态资源文件夹和ssl证书保存文件夹</span></span>
<span class="line"><span> RUN rm /etc/nginx/conf.d/default.conf \</span></span>
<span class="line"><span> &#x26;&#x26; mkdir -p /usr/share/nginx/html/static \</span></span>
<span class="line"><span> &#x26;&#x26; mkdir -p /usr/share/nginx/html/media \</span></span>
<span class="line"><span> &#x26;&#x26; mkdir -p /usr/share/nginx/ssl</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置Media文件夹用户和用户组为Linux默认www-data, 并给予可读和可执行权限,</span></span>
<span class="line"><span> # 否则用户上传的图片无法正确显示。</span></span>
<span class="line"><span> RUN chown -R www-data:www-data /usr/share/nginx/html/media \</span></span>
<span class="line"><span> &#x26;&#x26; chmod -R 775 /usr/share/nginx/html/media</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 添加配置文件</span></span>
<span class="line"><span> ADD ./nginx.conf /etc/nginx/conf.d/</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 关闭守护模式</span></span>
<span class="line"><span> CMD ["nginx", "-g", "daemon off;"]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx的配置文件如下所示</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # nginx配置文件</span></span>
<span class="line"><span> # compose/nginx/nginx.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> upstream django {</span></span>
<span class="line"><span>    ip_hash;</span></span>
<span class="line"><span>    server web:8000; # Docker-compose web服务端口</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> server {</span></span>
<span class="line"><span>    listen 80; # 监听80端口</span></span>
<span class="line"><span>    server_name localhost; # 可以是nginx容器所在ip地址或127.0.0.1，不能写宿主机外网ip地址</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    charset utf-8;</span></span>
<span class="line"><span>    client_max_body_size 10M; # 限制用户上传文件大小</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    location /static {</span></span>
<span class="line"><span>        alias /usr/share/nginx/html/static; # 静态资源路径</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    location /media {</span></span>
<span class="line"><span>        alias /usr/share/nginx/html/media; # 媒体资源，用户上传文件路径</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        include /etc/nginx/uwsgi_params;</span></span>
<span class="line"><span>        uwsgi_pass django;</span></span>
<span class="line"><span>        uwsgi_read_timeout 600;</span></span>
<span class="line"><span>        uwsgi_connect_timeout 600;</span></span>
<span class="line"><span>        uwsgi_send_timeout 600;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_redirect off;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP  $remote_addr;</span></span>
<span class="line"><span>        # proxy_pass http://django; # 使用uwsgi通信，而不是http，所以不使用proxy_pass。</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    access_log /var/log/nginx/access.log main;</span></span>
<span class="line"><span>    error_log /var/log/nginx/error.log warn;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    server_tokens off;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第四步-编写db-mysql-容器配置文件" tabindex="-1"><a class="header-anchor" href="#第四步-编写db-mysql-容器配置文件"><span>第四步：编写Db (MySQL)容器配置文件</span></a></h4>
<p>启动MySQL容器我们直接使用官方镜像即可，不过我们需要给MySQL增加配置文件。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # compose/mysql/conf/my.cnf</span></span>
<span class="line"><span> [mysqld]</span></span>
<span class="line"><span> user=mysql</span></span>
<span class="line"><span> default-storage-engine=INNODB</span></span>
<span class="line"><span> character-set-server=utf8</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> port            = 3306 # 端口与docker-compose里映射端口保持一致</span></span>
<span class="line"><span> #bind-address= localhost #一定要注释掉，mysql所在容器和django所在容器不同IP</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> basedir         = /usr</span></span>
<span class="line"><span> datadir         = /var/lib/mysql</span></span>
<span class="line"><span> tmpdir          = /tmp</span></span>
<span class="line"><span> pid-file        = /var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span> socket          = /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span> skip-name-resolve  # 这个参数是禁止域名解析的，远程访问推荐开启skip_name_resolve。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> [client]</span></span>
<span class="line"><span> port = 3306</span></span>
<span class="line"><span> default-character-set=utf8</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> [mysql]</span></span>
<span class="line"><span> no-auto-rehash</span></span>
<span class="line"><span> default-character-set=utf8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还需设置MySQL服务启动时需要执行的脚本命令, 注意这里的用户名和password必需和docker-compose.yml里与MySQL相关的环境变量保持一致。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # compose/mysql/init/init.sql</span></span>
<span class="line"><span> GRANT ALL PRIVILEGES ON myproject.* TO dbuser@"%" IDENTIFIED BY "password";</span></span>
<span class="line"><span> FLUSH PRIVILEGES;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第五步-编写redis-容器配置文件" tabindex="-1"><a class="header-anchor" href="#第五步-编写redis-容器配置文件"><span>第五步：编写Redis 容器配置文件</span></a></h4>
<p>启动redis容器我们直接使用官方镜像即可，不过我们需要给redis增加配置文件。大部分情况下采用默认配置就好了，这里我们只做出了如下几条核心改动：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # compose/redis/redis.conf</span></span>
<span class="line"><span> # Redis 5配置文件下载地址</span></span>
<span class="line"><span> # https://raw.githubusercontent.com/antirez/redis/5.0/redis.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 请注释掉下面一行，变成#bind 127.0.0.1,这样其它机器或容器也可访问</span></span>
<span class="line"><span> bind 127.0.0.1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 取消下行注释，给redis设置登录密码。这个密码django settings.py会用到。</span></span>
<span class="line"><span> requirepass yourpassword</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第六步-修改django项目settings-py" tabindex="-1"><a class="header-anchor" href="#第六步-修改django项目settings-py"><span>第六步：<a href="http://xn--Djangosettings-u82w550w652cfg4g.py" target="_blank" rel="noopener noreferrer">修改Django项目settings.py</a></span></a></h4>
<p>在你准备好docker-compose.yml并编排好各容器的Dockerfile及配置文件后，请先不要急于使用Docker-compose命令构建镜像和启动容器。这时还有一件非常重要的事情要做，<a href="http://xn--Djangosettings-u82w784l9c6aqvd6z6h3fyf.py" target="_blank" rel="noopener noreferrer">那就是修改Django的settings.py</a>, 提供mysql和redis服务的配置信息。最重要的几项配置如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # 生产环境设置 Debug = False</span></span>
<span class="line"><span> Debug = False</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置ALLOWED HOSTS</span></span>
<span class="line"><span> ALLOWED_HOSTS = ['your_server_IP', 'your_domain_name']</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置STATIC ROOT 和 STATIC URL</span></span>
<span class="line"><span> STATIC_ROOT = os.path.join(BASE_DIR, 'static')</span></span>
<span class="line"><span> STATIC_URL = "/static/"</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置MEDIA ROOT 和 MEDIA URL</span></span>
<span class="line"><span> MEDIA_ROOT = os.path.join(BASE_DIR, 'media')</span></span>
<span class="line"><span> MEDIA_URL = "/media/"</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置数据库。这里用户名和密码必需和docker-compose.yml里mysql环境变量保持一致</span></span>
<span class="line"><span> DATABASES = {</span></span>
<span class="line"><span>     'default': {</span></span>
<span class="line"><span>         'ENGINE': 'django.db.backends.mysql',</span></span>
<span class="line"><span>         'NAME': 'myproject', # 数据库名</span></span>
<span class="line"><span>         'USER':'dbuser', # 你设置的用户名 - 非root用户</span></span>
<span class="line"><span>         'PASSWORD':'password', # # 换成你自己密码</span></span>
<span class="line"><span>         'HOST': 'db', # 注意：这里使用的是db别名，docker会自动解析成ip</span></span>
<span class="line"><span>         'PORT':'3306', # 端口</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # 设置redis缓存。这里密码为redis.conf里设置的密码</span></span>
<span class="line"><span> CACHES = {</span></span>
<span class="line"><span>     "default": {</span></span>
<span class="line"><span>         "BACKEND": "django_redis.cache.RedisCache",</span></span>
<span class="line"><span>         "LOCATION": "redis://redis:6379/1", #这里直接使用redis别名作为host ip地址</span></span>
<span class="line"><span>         "OPTIONS": {</span></span>
<span class="line"><span>             "CLIENT_CLASS": "django_redis.client.DefaultClient",</span></span>
<span class="line"><span>             "PASSWORD": "yourpassword", # 换成你自己密码</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第七步-使用docker-compose-构建镜像并启动容器组服务" tabindex="-1"><a class="header-anchor" href="#第七步-使用docker-compose-构建镜像并启动容器组服务"><span>第七步：使用docker-compose 构建镜像并启动容器组服务</span></a></h4>
<p>现在我们可以使用docker-compose命名构建镜像并启动容器组了。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span> # 进入docker-compose.yml所在文件夹，输入以下命令构建镜像</span></span>
<span class="line"><span> sudo docker-compose build</span></span>
<span class="line"><span> # 查看已生成的镜像</span></span>
<span class="line"><span> sudo docker images</span></span>
<span class="line"><span> # 启动容器组服务</span></span>
<span class="line"><span> sudo docker-compose up</span></span>
<span class="line"><span> # 查看运行中的容器</span></span>
<span class="line"><span> sudo docker ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一切顺利，此时你应该可以看到四个容器都已经成功运行了。</p>
<h4 id="第八步-进入web容器内执行django命令并启动uwsgi服务器" tabindex="-1"><a class="header-anchor" href="#第八步-进入web容器内执行django命令并启动uwsgi服务器"><span>第八步：进入web容器内执行Django命令并启动uwsgi服务器</span></a></h4>
<p>虽然我们四个容器都已启动运行，但我们还没有执行Django相关命令并启动uwsgi服务器。现在我们只需进入web容器执行我们先前编写的脚本文件start.sh即可。</p>
<p><code v-pre>sudo docker exec -it myprojectdocker_web_1 /bin/bash start.sh</code><br>
此时打开你的浏览器，输入你服务器的ip地址或域名指向地址，你就应该可以看到网站已经上线啦。</p>
<p>小结<br>
本文详细地介绍了如何使用docker-compose工具分八步在生成环境下部署Django + Uwsgi + Nginx + MySQL + Redis。过程看似很复杂，但很多Dockerfile，项目布局及docker-compose.yml都是可以复用的。花时间学习并练习本章内容是非常值得的，一但你学会了，基本上可以10分钟内完成一个正式Django项目的部署，而且可以保证在任何一台Linux机器上顺利地运行。</p>
</div></template>


