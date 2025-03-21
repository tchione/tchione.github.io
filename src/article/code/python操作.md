---
icon: pen-to-square
date: 2021-03-20
category:
  - 技术
tag:
  - Python
  - 基础
---

# Python操作技巧
---

## 字典（dict）：
### 创建：
```
# 1、创建空字典
a = {}
b = dict()

# 2、有初始值
a = {'a': 1, 'b': 2, 'c': 3}
b = dict(a=1, b=2, c=3)

# 3、key 来自一个列表，而 value 相同, 使用 fromkeys
keys = ['a', 'b', 'c']
value = 100
d = dict.fromkeys(keys, value)

# 4、key 来自一个列表，而 value 也是一个列表，使用 zip
keys = ['a', 'b', 'c']
values = [1, 2, 3]
d = dict(zip(keys, values))
```
### 合并
```
m = {'a': 1}
n = {'b': 2, 'c': 3}

# 合并，两种方式
# 1、使用 update
m.update(n)

# 2、使用 **
{**m, **n}
```
### 判断key
* `a={} ; if 'w' in a:`

### 获取
* `a={'w':1}   a['w']`
* `a={'w':1}   a.get('w')`

### 遍历
* `{}.keys()`
* `{}.values()`
* `{}.items()`

### 排序
* `sorted(d.items(), key=lambda t: t[0], reverse=True)`
* **ps:列表通过value排序:**
	* `l = [{'name': 'a', 'count': 4}, {'name': 'b', 'count': 1}, {'name': 'd', 'count': 2}, {'name': 'c', 'count': 6}]`
	* `sorted(l, key=lambda e: e.__getitem__('count'), reverse=True)`

## 列表（list）
### 合并
* `[].append(item)`
* `[]+items`
* `[].extend(items)`

### 去重
* `list(set(items))`

### 统计次数
* `from collections import Counter`

## Dockerfile
### 基本结构
```
# 1、第一行必须是 FROM 基础镜像信息
FROM ubuntu
 
# 2、维护者信息
MAINTAINER docker_user docker_user@email.com
 
# 3、镜像操作指令
RUN echo "deb http://archive.ubuntu.com/ubuntu/ raring main universe" >> /etc/apt/sources.list
RUN apt-get update && apt-get install -y nginx
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
 
# 4、容器启动执行指令
CMD /usr/sbin/nginx
```
* **PS:有几点需要注意，第一行必须是 FROM 命令，表示是基于哪个基础镜像来创建镜像的。第二行一般是 MAINTAINER 命令，表示维护人信息，但不做硬性要求。最后一行是 CMD 命令，表示启动容器执行的命令，CMD 命令必须在最后一行，如果有多个 CMD 命令，则只有最后一个生效。**

### 常用指令
* **FROM：**必须是 Dockerfile 的首个命令，定义了使用哪个基础镜像启动构建流程。
* **MAINTAINER：** 声明镜像作者。
* **COPY：** 将宿主机的文件拷贝到镜像内的指定路径。
* **ADD：** 作用类似于 **COPY**。
* **COPY** 和 **ADD** 的区别是：**ADD** 命令功能更多，比如拷贝一个压缩包，**ADD** 可以将压缩包解压到镜像内，如果是下载链接，**ADD** 会先下载文件，然后再拷贝。
但现在 docker 官方更推荐使用 **COPY** 命令，一个命令只做一件事。
* **WORKDIR:**指定 Dockerfile 中该命令下的操作所在的工作目录。
* **RUN：** 执行命令行命令。
* **ENV：** 设置环境变量。
* **VOLUME：** 挂载数据卷。
* **EXPOSE：** 暴露端口。
* **CMD：** 服务启动命令。

### 创建镜像
* `docker build -t <image_name> .`

## 枚举
* 普通枚举
	* `enum.Enum`
* 可排序枚举
	* `enum.IntEnum`
* 唯一枚举
	* `@enum.unique`


## functools模块
### partial(partialmethod类似)
* 返回一个新的函数

```
from functools import partial

def add(x, y):
    return x + y

add_y = partial(add, 3)  # add_y 是一个新的函数
add_y(4) # 7
```
### wraps装饰器
* 保留函数原本的`__name__`值

### lru_cache装饰器
* 缓存函数的调用结果（下次不经过函数直接返回结果）

## itertools模块
### count()：无限迭代
### cycle()：无限重复可迭代序列内的值
### repeat(): 无限返回传入对象，可限制次数
### product():生成笛卡尔积
### permutations() 全排列
### compress
* bool选取

```
In [39]: list(itertools.compress('abcdef', [1, 1, 0, 1, 0, 1]))
Out[39]: ['a', 'b', 'd', 'f']

In [40]: list(itertools.compress('abcdef', [True, False, True]))
Out[40]: ['a', 'c']
```

### groupby
* 数据分组(先排序)

```
In [45]: for key, value_iter in itertools.groupby('aaabbbaaccd'):
   ....:     print key, list(value_iter)
   ....:     
a ['a', 'a', 'a']
b ['b', 'b', 'b']
a ['a', 'a']
c ['c', 'c']
d ['d']

In [48]: data = ['a', 'bb', 'cc', 'ddd', 'eee', 'f']

In [49]: for key, value_iter in itertools.groupby(data, len):
   ....:     print key, list(value_iter)
   ....:     
1 ['a']
2 ['bb', 'cc']
3 ['ddd', 'eee']
1 ['f']
```