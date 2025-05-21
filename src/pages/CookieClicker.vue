<script setup>
import { computed, onUnmounted, ref } from 'vue';

let cookies = ref(0);

let buildings = ref([
    { name: 'Cursor', price: 15, count: 0, cps: 0.1 },
    { name: 'Grandma', price: 100, count: 0, cps: 1 },
    { name: 'Farm', price: 1000, count: 0, cps: 10 },
    { name: 'Factory', price: 10000, count: 0, cps: 100 },
]);

let cps = computed(() => {
    return buildings.value.reduce((total, building) => total+building.cps*building.count, 0);
});

const cpsInterval = setInterval(() => {
    cookies.value+=cps.value;
    document.title = `🍪 ${cookies.value} cookies`;
}, 1000);


function buyBuilding(building){
    cookies.value-=building.price;
    building.price += Math.ceil(building.price * 0.15);
    building.count++;
}

onUnmounted(() => {
    clearInterval(cpsInterval);
});
</script>
<template>
    <div class="columns">
        <div class="column is-3 has-background-primary has-text-centered">
            <h1 class="is-size-1"><b>Cookies: {{ +cookies.toFixed(1) }}</b></h1>
            <h3 class="is-size-3"><b>CPS: {{ +cps.toFixed(1) }}</b></h3>
            <figure class="image is-square m-5">
                <img @click="cookies++" class="is-rounded" src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" />
            </figure>
        </div>
        <div class="column is-7 has-background-info">Second column</div>
        <div class="column is-2 has-background-warning">
            <button class="button is-large is-fullwidth is-primary" v-for="building in buildings" :disabled="cookies<building.price" @click="buyBuilding(building)" >
                {{ building.name }} 🍪{{ building.price }} #{{ building.count }}
            </button>
        </div>
    </div>
</template>