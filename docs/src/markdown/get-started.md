# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```js
import { Button, Tabs, Switch, Dialog } from 'rudder-ui'
```

全局引入样式

```js
import 'rudder-ui/dist/lib/rudder.css'
```

就可以使用我提供的组件了。

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
