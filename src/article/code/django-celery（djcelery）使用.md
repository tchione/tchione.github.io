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


# django-celery
* 1 安装(djcelery)：
    * pip install django-celery
* 2.配置：
    * `CELERYBEAT_SCHEDULER、BROKER_URL、CELERY_RESULT_BACKEND`也可以设置MQ，或者直接不写使用默认的mysql数据库，使用mysql后迁移数据库就可在数据库看到关于djcelery的表。
    * ```
      import djcelery
      INSTALLED_APPS = [
          .....,
        'djcelery',
          .....
        ]   
        djcelery.setup_loader()
        BROKER_URL = 'redis://127.0.0.1:6379/4'  # 使用redid做broker，消息代理、队列
        CELERYBEAT_SCHEDULER = 'redis://127.0.0.1:6379/5'  # 这是使用了django-celery默认的数据库调度模型,任务执行周期都被存在你指定的orm数据库中
        CELERY_RESULT_BACKEND = 'redis://127.0.0.1:6379/6'  # 需要跟踪任务的状态时保存结果和状态，结果存储
        CELERY_TIMEZONE = 'Asia/Shanghai'  # 默认上海时区
        CELERY_ACCEPT_CONTENT = ['pickle', 'json', 'msgpack', 'yaml']
        CELERY_TASK_SERIALIZER = 'json'
        CELERY_RESULT_SERIALIZER = 'json'
        CELERY_IMPORTS = ("app.tasks",) #注册tasks，app名字点tasks， 要不然智障系统找不到。
        CELERYD_TASK_TIME_LIMIT = 20  #（celery任务最长执行时间，超时kill）    
        ```
* 3.迁移数据库：
    * `python manage.py migrate`
    * `python manage.py makemigrations`
* 4.在随便app下创建tasks.py文件：
    * ```bash
      from celery.task import task
      @task
      def asdasdasd(q,w):
          return q + w
        ```
* 5.在view中调用：
    * ```bash
      from app.tasks import asdasdasd
      class TestView(View):
          def get(self, request):
              a = 1
              b = 2
              asdasdasd.delay(a, b)
              return JsonResponse({code:200})
        ```
* 6.启动项目：
    * `python manage runserver 8000`(测试环境下启动)
    * `python manage.py celery worker --loglevel=info`
* 7.访问TestView类的接口就可以看到异步成功执行了
