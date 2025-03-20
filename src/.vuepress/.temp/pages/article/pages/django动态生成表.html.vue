<template><div><h1 id="django动态生成表" tabindex="-1"><a class="header-anchor" href="#django动态生成表"><span>django动态生成表</span></a></h1>
<hr>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>from django.db import models</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># name是表名，fields是字段，app_label是你的应用名(如：flow)，module是应用下的模型（如:flow.models）,options是元类选项</span></span>
<span class="line"><span>def create_model1(name, fields=None, app_label='', module='', options=None):</span></span>
<span class="line"><span>    class Meta:  # 模型类的Meta类</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if app_label:  # 必须在元类中设置app_label，相关属性可参考https://www.cnblogs.com/lcchuguo/p/4754485.html</span></span>
<span class="line"><span>        setattr(Meta, 'app_label', app_label)  # 更新元类的选项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if options is not None:</span></span>
<span class="line"><span>        for key, value in options.items():</span></span>
<span class="line"><span>            setattr(Meta, key, value)  # 设置模型的属性</span></span>
<span class="line"><span>        attrs = {'__module__': module, 'Meta': Meta}  # 添加字段属性</span></span>
<span class="line"><span>    if fields:</span></span>
<span class="line"><span>        attrs.update(fields)  # 创建模型类对象</span></span>
<span class="line"><span>    return type(name, (models.Model,), attrs)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def install(custom_model):</span></span>
<span class="line"><span>    from django.db import connection</span></span>
<span class="line"><span>    from django.db.backends.base.schema import BaseDatabaseSchemaEditor</span></span>
<span class="line"><span>    editor = BaseDatabaseSchemaEditor(connection)</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        editor.create_model(model=custom_model)  # 会抛出个异常，不知为啥,但表会创建</span></span>
<span class="line"><span>    except AttributeError as aerror:</span></span>
<span class="line"><span>        print(aerror)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def CreateNewTab(tabdate):</span></span>
<span class="line"><span>    fields = {</span></span>
<span class="line"><span>        "name": models.CharField(max_length=30),</span></span>
<span class="line"><span>        '__str__': lambda self: '%s' % (</span></span>
<span class="line"><span>            self.name,</span></span>
<span class="line"><span>        ), }</span></span>
<span class="line"><span>    options = {'ordering': [</span></span>
<span class="line"><span>        "name",</span></span>
<span class="line"><span>    ], 'verbose_name': 'valued customer', }</span></span>
<span class="line"><span>    custom_model = create_model1(name=tabdate, fields=fields, options=options, app_label='fr__',</span></span>
<span class="line"><span>                                 module='flow.models')</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        custom_model.objects.get(id=1)</span></span>
<span class="line"><span>    except:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            install(custom_model)  # 同步到数据库中</span></span>
<span class="line"><span>        except:</span></span>
<span class="line"><span>            pass</span></span>
<span class="line"><span>    return custom_model</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


