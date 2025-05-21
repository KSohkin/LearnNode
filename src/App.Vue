<script setup>

import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let titles = ['Item1', 'Item2', 'Item3', 'Item4'];
let contents = ['content 1', 'content 2', 'content 3', 'content 4'];
let activeTab = ref(0);
function change(key){
    console.log(key);
    activeTab.value = key;
}

</script>

<template>
        <Tabs :items="titles" @change="change"></Tabs>
    <div class="container">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>

<style>

</style>