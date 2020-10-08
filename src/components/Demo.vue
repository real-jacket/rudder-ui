<template>
<div class="demo">
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-description">
        <p class="demo-description-title">{{component.__sourceCodeTitle}}</p>
        <p class="demo-description-desc">{{component.__sourceCodeDesc}}</p>
    </div>
    <div class="demo-actions">
        <span @click="toggleCode">查看代码</span>
        <Switch v-model:value="codeVisible"></Switch>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
    </div>

</div>
</template>

<script lang="ts">
import {
    computed,
    ref
} from 'vue'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'
import Switch from '../lib/Switch.vue';
export default {
    name: 'Demo',
    components: {
        Switch
    },
    props: {
        component: Object
    },
    setup(props, context) {
        const codeVisible = ref(false)

        const toggleCode = () => {
            codeVisible.value = !codeVisible.value
        }

        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })

        return {
            codeVisible,
            toggleCode,
            html
        }
    }
}
</script>

<style lang="scss" scoped>
$border:#f0f0f0;

.demo {
    border: 1px solid $border;
    margin-top: 20px;
    margin-right: 20px;

    &:last-child {
        margin-bottom: 20px;
    }

    &-component {
        padding: 42px 24px 50px;
        color: rgba(0, 0, 0, .85);
        border-bottom: 1px solid #f0f0f0;
    }

    &-description {
        color: rgba(0, 0, 0, .85);
        background: #fff;
        font-size: 14px;
        position: relative;

        &-title {
            font-weight: bold;
            margin-left: 20px;
            padding: 4px;
            transform: translateY(-50%);
            background: white;
            position: absolute;
        }

        &-desc {
            padding: 18px 24px 12px;
        }
    }

    &-actions {
        padding: 12px 24px;
        display: flex;
        align-items: center;
        border-top: 1px dashed $border;
        font-size: 14px;

        >span {
            margin-right: 10px;
        }
    }

    &-code {
        display: block;

        .language-html {
            margin-bottom: 0;
        }
    }
}
</style>
