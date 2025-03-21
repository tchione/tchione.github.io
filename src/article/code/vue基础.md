---
icon: pen-to-square
date: 2021-03-20
category:
  - 技术
tag:
  - Vue
  - 前端
---

# Vue项目部署
## 项目初始化：
* 安装`node`与`npm`或者`cnpm`
	* `cnpm`:`npm install cnpm -g --registry=https://registry.npm.taobao.org`
	* [官方下载：`node`](https://nodejs.org/en/download/)
* 全局安装`vue-cil`：`cnpm install -g vue-cli ` 
* 项目初始化:`vue init webpack`   **ps:会有一堆配置**
* 初始化项目依赖：`cnpm install `
* 启动项目：`npm run dev` **ps:可以配置编译器启动**

## vue使用
### 赋值：
```html
<template>
<div id="app">
    <!--使用插值表达式展示-->
    {{message}}
</div>
</template>
<script>
    new Vue({
        //定义数据
        data: {
            message: 'hello world'
        }
    });
</script>
```
### 绑定事件：
* **@click**

```html
<template>
<div id="app">
    <input type="button" value="点击改变" @click="fun01"/>
</div>
</template>
<script>
    new Vue({
        //定义数据
        data: {
            message: 'hello world'
        }，
        methods:{
                fun01:function () {
                    this.message = '你好,世界...';
                }
            }
    });
</script>
```

### 绑定键盘输入事件：
* **@keydown**
* **ps:对文本输入框做校验，使用键盘按下事件，如果按下0-9的数字，正常显示，其他按键则阻止事件执行。**

```html
<template>
<div id="app">
	<input type="text" value="hello.." @keydown="fun01($event)"/>
</div>
</template>
<script>
    new Vue({
        //定义数据
        data: {},
        methods:{
                fun01:function (e) {
                    var keyCode=  e.keyCode;
                    if (!(keyCode >= 49 && keyCode<=57)){
                        //阻止事件执行
                        e.preventDefault();
                    }
                }
            }
    });
</script>
```
### 鼠标移入事件
* **@mouseover**

### 事件修饰符：
```html
.stop     // 停止触发，阻止冒泡修饰符 
.prevent  // 阻止事件发生，阻止事件默认行为
.capture  // 捕获 
.self     // 只点自己身上才运行
.once     // 只执行一次
```
### 按键修饰符：
```html
.enter  // 表示键盘的enter键
.tab
.delete (捕获 "删除" 和 "退格" 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta
```
### v-bind
* `插值语法不能作用在HTML 属性上，遇到这种情况应该使用 v-bind指令`
* `    <font v-bind:color="ys">hello world</font>
    <a :href="info">百度</a>`
### v-model
* `用户名:<input type="text" v-model="user.username"><br>`
### v-for
```html
        <li v-for="(item,index) in array">
            {{index}}---{{item}}
        </li>
```
### v-model
* `    <span v-if="flag">hello</span>`
* ` <span v-show="flag">你好</span>`
## VueJS生命周期

* beforeCreate ：数据还没有监听，没有绑定到vue对象实例，同时也没有挂载对象
* created ：数据已经绑定到了对象实例，但是还没有挂载对象（使用ajax可在此方法中查询数据，调用函数）
* beforeMount: 模板已经编译好了，根据数据和模板已经生成了对应的元素对象，将数据对象关联到了对象的
* el属性，el属性是一个HTMLElement对象，也就是这个阶段，vue实例通过原生的createElement等方法来创建这个html片段，准备注入到我们vue实例指明的el属性所对应的挂载点
* mounted:将el的内容挂载到了el，相当于我们在jquery执行了(el).html(el),生成页面上真正的dom，上面我们就会发现dom的元素和我们el的元素是一致的。在此之后，我们能够用方法来获取到el元素下的dom对象，并进行各种操作当我们的data发生改变时，会调用beforeUpdate和updated方法
* beforeUpdate ：数据更新到dom之前，我们可以看到$el对象已经修改，但是我们页面上dom的数据还没有发生改变
* updated: dom结构会通过虚拟dom的原则，找到需要更新页面dom结构的最小路径，将改变更新到dom上面，完成更新
* beforeDestroy,destroed :实例的销毁，vue实例还是存在的，只是解绑了事件的监听、还有watcher对象数据与view的绑定，即数据驱动