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


# django动态生成表
---
```
from django.db import models


# name是表名，fields是字段，app_label是你的应用名(如：flow)，module是应用下的模型（如:flow.models）,options是元类选项
def create_model1(name, fields=None, app_label='', module='', options=None):
    class Meta:  # 模型类的Meta类
        pass

    if app_label:  # 必须在元类中设置app_label，相关属性可参考https://www.cnblogs.com/lcchuguo/p/4754485.html
        setattr(Meta, 'app_label', app_label)  # 更新元类的选项

    if options is not None:
        for key, value in options.items():
            setattr(Meta, key, value)  # 设置模型的属性
        attrs = {'__module__': module, 'Meta': Meta}  # 添加字段属性
    if fields:
        attrs.update(fields)  # 创建模型类对象
    return type(name, (models.Model,), attrs)


def install(custom_model):
    from django.db import connection
    from django.db.backends.base.schema import BaseDatabaseSchemaEditor
    editor = BaseDatabaseSchemaEditor(connection)
    try:
        editor.create_model(model=custom_model)  # 会抛出个异常，不知为啥,但表会创建
    except AttributeError as aerror:
        print(aerror)


def CreateNewTab(tabdate):
    fields = {
        "name": models.CharField(max_length=30),
        '__str__': lambda self: '%s' % (
            self.name,
        ), }
    options = {'ordering': [
        "name",
    ], 'verbose_name': 'valued customer', }
    custom_model = create_model1(name=tabdate, fields=fields, options=options, app_label='fr__',
                                 module='flow.models')
    try:
        custom_model.objects.get(id=1)
    except:
        try:
            install(custom_model)  # 同步到数据库中
        except:
            pass
    return custom_model

```