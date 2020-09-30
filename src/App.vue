<template>
<div>
    导航栏 | <router-link to="/ke">ke</router-link> | <router-link to="/te">te</router-link>
</div>
<router-view></router-view>
</template>

<script>
import Ke from './components/Ke.vue'

export default {
    name: 'App'
}
</script>
