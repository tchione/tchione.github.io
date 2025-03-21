import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/django动态生成表.html.vue"
const data = JSON.parse("{\"path\":\"/article/code/django%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90%E8%A1%A8.html\",\"title\":\"django动态生成表\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2021-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\",\"后端\",\"Django\"],\"description\":\"django动态生成表\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/code/django%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90%E8%A1%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Chione\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"django动态生成表\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"django动态生成表\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-03-20T05:57:35.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"后端\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Django\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-03-20T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-03-20T05:57:35.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"django动态生成表\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2025-03-20T05:57:35.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"git\":{\"createdTime\":1742450255000,\"updatedTime\":1742450255000,\"contributors\":[{\"name\":\"wen.tian\",\"username\":\"wen.tian\",\"email\":\"tw958658@163.com\",\"commits\":1,\"url\":\"https://github.com/wen.tian\"}]},\"readingTime\":{\"minutes\":0.82,\"words\":245},\"filePathRelative\":\"article/code/django动态生成表.md\",\"localizedDate\":\"2021年3月20日\",\"excerpt\":\"\\n<hr>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>from django.db import models</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span># name是表名，fields是字段，app_label是你的应用名(如：flow)，module是应用下的模型（如:flow.models）,options是元类选项</span></span>\\n<span class=\\\"line\\\"><span>def create_model1(name, fields=None, app_label='', module='', options=None):</span></span>\\n<span class=\\\"line\\\"><span>    class Meta:  # 模型类的Meta类</span></span>\\n<span class=\\\"line\\\"><span>        pass</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span>    if app_label:  # 必须在元类中设置app_label，相关属性可参考https://www.cnblogs.com/lcchuguo/p/4754485.html</span></span>\\n<span class=\\\"line\\\"><span>        setattr(Meta, 'app_label', app_label)  # 更新元类的选项</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span>    if options is not None:</span></span>\\n<span class=\\\"line\\\"><span>        for key, value in options.items():</span></span>\\n<span class=\\\"line\\\"><span>            setattr(Meta, key, value)  # 设置模型的属性</span></span>\\n<span class=\\\"line\\\"><span>        attrs = {'__module__': module, 'Meta': Meta}  # 添加字段属性</span></span>\\n<span class=\\\"line\\\"><span>    if fields:</span></span>\\n<span class=\\\"line\\\"><span>        attrs.update(fields)  # 创建模型类对象</span></span>\\n<span class=\\\"line\\\"><span>    return type(name, (models.Model,), attrs)</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span>def install(custom_model):</span></span>\\n<span class=\\\"line\\\"><span>    from django.db import connection</span></span>\\n<span class=\\\"line\\\"><span>    from django.db.backends.base.schema import BaseDatabaseSchemaEditor</span></span>\\n<span class=\\\"line\\\"><span>    editor = BaseDatabaseSchemaEditor(connection)</span></span>\\n<span class=\\\"line\\\"><span>    try:</span></span>\\n<span class=\\\"line\\\"><span>        editor.create_model(model=custom_model)  # 会抛出个异常，不知为啥,但表会创建</span></span>\\n<span class=\\\"line\\\"><span>    except AttributeError as aerror:</span></span>\\n<span class=\\\"line\\\"><span>        print(aerror)</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span>def CreateNewTab(tabdate):</span></span>\\n<span class=\\\"line\\\"><span>    fields = {</span></span>\\n<span class=\\\"line\\\"><span>        \\\"name\\\": models.CharField(max_length=30),</span></span>\\n<span class=\\\"line\\\"><span>        '__str__': lambda self: '%s' % (</span></span>\\n<span class=\\\"line\\\"><span>            self.name,</span></span>\\n<span class=\\\"line\\\"><span>        ), }</span></span>\\n<span class=\\\"line\\\"><span>    options = {'ordering': [</span></span>\\n<span class=\\\"line\\\"><span>        \\\"name\\\",</span></span>\\n<span class=\\\"line\\\"><span>    ], 'verbose_name': 'valued customer', }</span></span>\\n<span class=\\\"line\\\"><span>    custom_model = create_model1(name=tabdate, fields=fields, options=options, app_label='fr__',</span></span>\\n<span class=\\\"line\\\"><span>                                 module='flow.models')</span></span>\\n<span class=\\\"line\\\"><span>    try:</span></span>\\n<span class=\\\"line\\\"><span>        custom_model.objects.get(id=1)</span></span>\\n<span class=\\\"line\\\"><span>    except:</span></span>\\n<span class=\\\"line\\\"><span>        try:</span></span>\\n<span class=\\\"line\\\"><span>            install(custom_model)  # 同步到数据库中</span></span>\\n<span class=\\\"line\\\"><span>        except:</span></span>\\n<span class=\\\"line\\\"><span>            pass</span></span>\\n<span class=\\\"line\\\"><span>    return custom_model</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
export { comp, data }
