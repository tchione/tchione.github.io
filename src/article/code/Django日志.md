---
icon: pen-to-square
date: 2021-03-20
category:
  - 技术
tag:
  - Python
  - 后端
  - Django
---


# Django日志
---
```
cur_path = os.path.dirname(os.path.realpath(__file__))  # log_path是存放日志的路径
log_path = os.path.join(os.path.dirname(cur_path), 'log')
if not os.path.exists(log_path): os.mkdir(log_path)  # 如果不存在这个logs文件夹，就自动创建一个
LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'formatters': {
        # 日志格式
        'standard': {
            'format': '[%(asctime)s] [%(filename)s:%(lineno)d] [%(module)s:%(funcName)s] '
                      '[%(levelname)s]- %(message)s'},
        'simple': {  # 简单格式
            'format': '%(levelname)s %(message)s'
        },
    },
    # 过滤
    'filters': {
    },
    # 定义具体处理日志的方式
    'handlers': {
        'file': {
            'level': 'INFO',
            # 'class': 'logging.FileHandler',
            'filename': os.path.dirname(os.path.dirname(os.path.realpath(__file__))) + '/log/log.txt',
            'class': 'logging.handlers.RotatingFileHandler',
            'maxBytes': 1024 * 1024 * 300,
            'backupCount': 2,
            'formatter': 'standard',
            'encoding': 'utf-8',  # 设置默认编码
        },
    },
    # 配置用哪几种 handlers 来处理日志
    'loggers': {
        # 类型 为 django 处理所有类型的日志， 默认调用
        'log_info': {
            'handlers': ['file'],
            'level': 'INFO',
            'propagate': True
        },
    }
}
import logging
logger = logging.getLogger('log_info')
# logger.info('uuid:{}--->adid:{}-->行数:{}--->错误:{}'.format(uuid_id, device_id,72,e))
```