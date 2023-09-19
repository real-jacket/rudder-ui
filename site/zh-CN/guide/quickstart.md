---
title: 快速开始
lang: zh-CN
---

# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```js
import { RButton, RTabs, RSwitch, RDialog } from 'rudder-ui'
```

也可以单独引入某个组件，但是需要全局引入基础样式

```js
import 'rudder-ui/index.css'

import RButton from 'rudder-ui/es/button'

```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```Vue
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
