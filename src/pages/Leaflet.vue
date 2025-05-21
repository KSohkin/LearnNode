<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

let center = ref([59.3085, 24.6659]);
let zoom = ref(19);
</script>
<template>
        <button class="button is-primary" @click="center=[59.30858457803569, 24.665963756519922]">Go To Home</button>
     <input type="range" min="1" max="19" v-model="zoom">
        <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
     <LeafletMap :center="[24.6659, 59.3085]" :zoom="19"></LeafletMap>
</template>
