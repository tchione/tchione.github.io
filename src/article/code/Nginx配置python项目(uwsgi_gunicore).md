---
icon: pen-to-square
date: 2025-03-20
category:
  - 技术
tag:
  - Python
  - 后端
  - Django
---


# Django项目部署
## 项目初始化：
gunicorn -c gunicorn.py my_dhblog.wsgi:application
* pipenv shell 进入pipenv虚拟环境
* pipenv sync 安装依赖
* python manage.py makemigrations 数据库迁移
* python manage.py migrate 数据库迁移2
## uwsgi部署
### uwsgi依赖
* pip install uwsgi
### uwsgi配置文件
```nashorn js
[uwsgi]
;http=0.0.0.0:8000 #直接做web服务器
socket=127.0.0.1:8888 #nginx代理
chdir=/home/ubuntu/Tgame_B/pre #项目路径
wsgi-file=pre/wsgi.py #wsgi文件路径
master=True
processes=3 #进程数
threads=1 #线程数
daemonize=../pre/uwsgi.log #日志文件
pidfile=..pre/uwsgi.pid #启动后uwsgi进程号
```
### uwsgi基本命令
* uwsgi --ini  uwsgi.ini #启动
* uwsgi --stop uwsgi.pid #停止
### nginx配置uwsgi
```nashorn js
server{
        listen 80;
        server_name  0.0.0.0;
        #动态资源请求uwsgi服务器
        location / {
                include /usr/local/etc/nginx/uwsgi_params;
                include mime.types;
                uwsgi_pass 127.0.0.1:8888;
                }
         #静态资源
        location /static {
                alias  /Users/moric/tian/tian/game-box/static;
                  }
        }
```
### vue的nginx项目部署
```nashorn js
server{
     listen 80;
     root "/root/T_Sama/dist";
     location / {
                index index.html index.html;
                }
      }
```
### uwsgi+dwebsocket项目部署
- **ps:** dwebsocket我失败了用的gunicore
```nashorn js
        server{
                listen 8080;
                #动态资源
                location / {
                        include uwsgi_params;
                        uwsgi_pass 127.0.0.1:8888;
                        }
                #websocket资源
                location ~/ws_co {
                        include uwsgi_params;
                        uwsgi_pass 127.0.0.1:8888;
                        proxy_set_header Upgrade $http_upgrade;
                        proxy_set_header Connection "upgrade";
                        }
                #静态资源
                location /static {
                        alias  /root/T_Sama/my_dhblog/static/;
                          }
                }
        #vue项目
        server{
             listen 80;
             root "/root/T_Sama/dist";
             location / {
                        index index.html index.html;
                        }
              }
```
### nginx命令
* nginx -s stop #停止
* nginx #启动
* nginx -d 绝对路径nginx配置文件 #选择配置文件启动
## gunicore部署
### gunicore依赖
* pip install gunicore
* pip install wheel
* pip install gevent
### gunicore配置文件
* 在manage.py 目录下
```mysql based
#gunicorn.py
import logging
import logging.handlers
from logging.handlers import WatchedFileHandler
import os
import multiprocessing
bind = '127.0.0.1:8000'  # 绑定ip和端口号
backlog = 512  # 监听队列
chdir = '/home/CSJ_Live'  # gunicorn要切换到的目的工作目录
worker_class = 'gevent'  # 使用gevent模式，还可以使用sync 模式，默认的是sync模式
#workers = multiprocessing.cpu_count() * 2 + 1  # 进程数(多进程数据不互通，默认workers为1，单进程模式)
loglevel = 'info'  # 日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置
errorlog = '../logs/gunicorn.error.log'  #错误日志
accesslog = '../logs/gunicorn.access.log' #访问日志
daemon = True # 后台运行
```
### gunicore启动命令
* gunicorn -c gunicorn.py CSJ_Live.wsgi:application
### nginx配置gunicorn+websoket
```nashorn js
server {
        listen 80;
        server_name 域名; 
        charset utf-8;
        # gunicorn配置
        location / {
                # gunicorn配置
                proxy_pass http://127.0.0.1:8000;
        }
        # 处理websocket请求
        location ~ /viewer/chat_room {
                # gunicorn配置
                proxy_pass http://127.0.0.1:8000;
                proxy_http_version 1.1;
                proxy_redirect off;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                # 下面两行是重点
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";

        }
}
```
