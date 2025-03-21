import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/Django日志.html.vue"
const data = JSON.parse("{\"path\":\"/article/code/Django%E6%97%A5%E5%BF%97.html\",\"title\":\"Django日志\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2021-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\",\"后端\",\"Django\"],\"description\":\"Django日志\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/code/Django%E6%97%A5%E5%BF%97.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Chione\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Django日志\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Django日志\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-03-20T05:57:35.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"后端\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Django\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-03-20T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-03-20T05:57:35.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Django日志\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2025-03-20T05:57:35.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"git\":{\"createdTime\":1742450255000,\"updatedTime\":1742450255000,\"contributors\":[{\"name\":\"wen.tian\",\"username\":\"wen.tian\",\"email\":\"tw958658@163.com\",\"commits\":1,\"url\":\"https://github.com/wen.tian\"}]},\"readingTime\":{\"minutes\":0.65,\"words\":196},\"filePathRelative\":\"article/code/Django日志.md\",\"localizedDate\":\"2021年3月20日\",\"excerpt\":\"\\n<hr>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>cur_path = os.path.dirname(os.path.realpath(__file__))  # log_path是存放日志的路径</span></span>\\n<span class=\\\"line\\\"><span>log_path = os.path.join(os.path.dirname(cur_path), 'log')</span></span>\\n<span class=\\\"line\\\"><span>if not os.path.exists(log_path): os.mkdir(log_path)  # 如果不存在这个logs文件夹，就自动创建一个</span></span>\\n<span class=\\\"line\\\"><span>LOGGING = {</span></span>\\n<span class=\\\"line\\\"><span>    'version': 1,</span></span>\\n<span class=\\\"line\\\"><span>    'disable_existing_loggers': True,</span></span>\\n<span class=\\\"line\\\"><span>    'formatters': {</span></span>\\n<span class=\\\"line\\\"><span>        # 日志格式</span></span>\\n<span class=\\\"line\\\"><span>        'standard': {</span></span>\\n<span class=\\\"line\\\"><span>            'format': '[%(asctime)s] [%(filename)s:%(lineno)d] [%(module)s:%(funcName)s] '</span></span>\\n<span class=\\\"line\\\"><span>                      '[%(levelname)s]- %(message)s'},</span></span>\\n<span class=\\\"line\\\"><span>        'simple': {  # 简单格式</span></span>\\n<span class=\\\"line\\\"><span>            'format': '%(levelname)s %(message)s'</span></span>\\n<span class=\\\"line\\\"><span>        },</span></span>\\n<span class=\\\"line\\\"><span>    },</span></span>\\n<span class=\\\"line\\\"><span>    # 过滤</span></span>\\n<span class=\\\"line\\\"><span>    'filters': {</span></span>\\n<span class=\\\"line\\\"><span>    },</span></span>\\n<span class=\\\"line\\\"><span>    # 定义具体处理日志的方式</span></span>\\n<span class=\\\"line\\\"><span>    'handlers': {</span></span>\\n<span class=\\\"line\\\"><span>        'file': {</span></span>\\n<span class=\\\"line\\\"><span>            'level': 'INFO',</span></span>\\n<span class=\\\"line\\\"><span>            # 'class': 'logging.FileHandler',</span></span>\\n<span class=\\\"line\\\"><span>            'filename': os.path.dirname(os.path.dirname(os.path.realpath(__file__))) + '/log/log.txt',</span></span>\\n<span class=\\\"line\\\"><span>            'class': 'logging.handlers.RotatingFileHandler',</span></span>\\n<span class=\\\"line\\\"><span>            'maxBytes': 1024 * 1024 * 300,</span></span>\\n<span class=\\\"line\\\"><span>            'backupCount': 2,</span></span>\\n<span class=\\\"line\\\"><span>            'formatter': 'standard',</span></span>\\n<span class=\\\"line\\\"><span>            'encoding': 'utf-8',  # 设置默认编码</span></span>\\n<span class=\\\"line\\\"><span>        },</span></span>\\n<span class=\\\"line\\\"><span>    },</span></span>\\n<span class=\\\"line\\\"><span>    # 配置用哪几种 handlers 来处理日志</span></span>\\n<span class=\\\"line\\\"><span>    'loggers': {</span></span>\\n<span class=\\\"line\\\"><span>        # 类型 为 django 处理所有类型的日志， 默认调用</span></span>\\n<span class=\\\"line\\\"><span>        'log_info': {</span></span>\\n<span class=\\\"line\\\"><span>            'handlers': ['file'],</span></span>\\n<span class=\\\"line\\\"><span>            'level': 'INFO',</span></span>\\n<span class=\\\"line\\\"><span>            'propagate': True</span></span>\\n<span class=\\\"line\\\"><span>        },</span></span>\\n<span class=\\\"line\\\"><span>    }</span></span>\\n<span class=\\\"line\\\"><span>}</span></span>\\n<span class=\\\"line\\\"><span>import logging</span></span>\\n<span class=\\\"line\\\"><span>logger = logging.getLogger('log_info')</span></span>\\n<span class=\\\"line\\\"><span># logger.info('uuid:{}---&gt;adid:{}--&gt;行数:{}---&gt;错误:{}'.format(uuid_id, device_id,72,e))</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
export { comp, data }
