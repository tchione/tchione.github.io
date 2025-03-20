<template><div><h1 id="django日志" tabindex="-1"><a class="header-anchor" href="#django日志"><span>Django日志</span></a></h1>
<hr>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>cur_path = os.path.dirname(os.path.realpath(__file__))  # log_path是存放日志的路径</span></span>
<span class="line"><span>log_path = os.path.join(os.path.dirname(cur_path), 'log')</span></span>
<span class="line"><span>if not os.path.exists(log_path): os.mkdir(log_path)  # 如果不存在这个logs文件夹，就自动创建一个</span></span>
<span class="line"><span>LOGGING = {</span></span>
<span class="line"><span>    'version': 1,</span></span>
<span class="line"><span>    'disable_existing_loggers': True,</span></span>
<span class="line"><span>    'formatters': {</span></span>
<span class="line"><span>        # 日志格式</span></span>
<span class="line"><span>        'standard': {</span></span>
<span class="line"><span>            'format': '[%(asctime)s] [%(filename)s:%(lineno)d] [%(module)s:%(funcName)s] '</span></span>
<span class="line"><span>                      '[%(levelname)s]- %(message)s'},</span></span>
<span class="line"><span>        'simple': {  # 简单格式</span></span>
<span class="line"><span>            'format': '%(levelname)s %(message)s'</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    # 过滤</span></span>
<span class="line"><span>    'filters': {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    # 定义具体处理日志的方式</span></span>
<span class="line"><span>    'handlers': {</span></span>
<span class="line"><span>        'file': {</span></span>
<span class="line"><span>            'level': 'INFO',</span></span>
<span class="line"><span>            # 'class': 'logging.FileHandler',</span></span>
<span class="line"><span>            'filename': os.path.dirname(os.path.dirname(os.path.realpath(__file__))) + '/log/log.txt',</span></span>
<span class="line"><span>            'class': 'logging.handlers.RotatingFileHandler',</span></span>
<span class="line"><span>            'maxBytes': 1024 * 1024 * 300,</span></span>
<span class="line"><span>            'backupCount': 2,</span></span>
<span class="line"><span>            'formatter': 'standard',</span></span>
<span class="line"><span>            'encoding': 'utf-8',  # 设置默认编码</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    # 配置用哪几种 handlers 来处理日志</span></span>
<span class="line"><span>    'loggers': {</span></span>
<span class="line"><span>        # 类型 为 django 处理所有类型的日志， 默认调用</span></span>
<span class="line"><span>        'log_info': {</span></span>
<span class="line"><span>            'handlers': ['file'],</span></span>
<span class="line"><span>            'level': 'INFO',</span></span>
<span class="line"><span>            'propagate': True</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>import logging</span></span>
<span class="line"><span>logger = logging.getLogger('log_info')</span></span>
<span class="line"><span># logger.info('uuid:{}--->adid:{}-->行数:{}--->错误:{}'.format(uuid_id, device_id,72,e))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


