---
icon: pen-to-square
date: 2025-03-20
category:
  - 技术
tag:
  - Vue
  - 前端
---


# VUE自用组件传值方式

### store传值

* `store`是全局保存数据，一般保存一些cookie，权限，用户等信息。
* 需要进行注册`app.use(pinia)`
* 这个是持久化插件，可以将数据持久保存在本地`pinia-plugin-persistedstate`

### 父组件传子组件

* 暴露子组件函数，父组件调用

  * 子组件暴露函数

    * ```
      const show = (item={})=>{} //item是参数{}是类型
      defineExpose({show})
      ```

  * 父组件调用

    * ```
      导入： import UserDialog from './userDialog.vue'
      注册：  components: {UserDialog}
      使用： <UserDialog @custClick="reGetTable" ref="userDialog"/>--(html)
      传值： this.$refs.userDialog.show(row)----(js)
      ```

* 通过props传值

  * 父组件

    * ```
      <UserDialog :myName="data"/>
      ```

  * 子组件

    * ```
      export default{props: {myName: {type:String,requires: true}}
      键名，字符串类型，必填
      ```

### 子组件传父组件

* 通过emit传值，ts要导入

  * 子组件

    * ```
      import {defineEmits} from "vue";
      const emit = defineEmits(['custClick']);
      emit('custClick', 1)
      ```

  * 父组件

    * ```
      <UserDialog @custClick="reGetTable" ref="userDialog"/>
      通过子组件绑定的字符串custClick找到父组件对应的函数reGetTable
      ```

### 路由间传值

* 传值跳转后url保留参数`query`
  * `$this.$router.push({ name: 'map-show', query: { search: 'aaa' } })`
  * 跳转后获取参数`this.$route.query.search`
* url不保留参数
  * `this.$router.push({name: 'sign-off',params: { preData: row.id , flag: false}})`

