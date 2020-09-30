<template>
<input v-model="value" />
<button @click="add">添加</button>
<ul>
    <li v-for="(item,index) in list" :key='index + item'>
        <span>{{item}}</span>
        <span @click="remove(index)"> X </span>
    </li>
</ul>
</template>

<script>
export default {
    name: 'Ke',
    data() {
        return {
            value: '',
            list: []
        }
    },
    methods: {
        add() {
            if (!this.value) {
                return
            }
            this.list.push(this.value)
            this.value = ''
        },
        remove(index) {
            this.list.splice(index, 1)

        }
    }
}
</script>
