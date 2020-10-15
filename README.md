# rudder-ui

一个基于 vue3 + vite 开构建的 UI 组件库

# 安装

打开终端运行下列命令：

```
npm install rudder-ui
```

或

```
yarn add rudder-ui
```

# 开始使用

请先[安装](#/doc/install)本组件库。

全局引入样式

```
import 'rudder-ui/dist/lib/rudder.css'
```

使用组件

```
import {Button, Tabs, Switch, Dialog} from "rudder-ui"
```

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "rudder-ui"
export default {
  components: {Button}
}
</script>
```
