<script setup>
import { computed, onUnmounted, ref, watch } from 'vue';

let cookies = ref(0);
let totalCookies = ref(0); 

let buildings = ref([
    { name: 'Cursor', price: 15, count: 0, cps: 0.1 },
    { name: 'Grandma', price: 100, count: 0, cps: 1 },
    { name: 'Farm', price: 1000, count: 0, cps: 10 },
    { name: 'Factory', price: 10000, count: 0, cps: 100 },
]);

let cps = computed(() =>
    buildings.value.reduce((total, building) => total + building.cps * building.count, 0)
);

// Achievements
let achievements = ref([]);
let unlockedAchievements = ref([]);

const achievementConditions = [
    { name: 'First Cookie', condition: () => totalCookies.value >= 1 },
    { name: '100 Cookies', condition: () => totalCookies.value >= 100 },
    { name: '1K Cookies', condition: () => totalCookies.value >= 1000 },
    { name: 'First Cursor', condition: () => buildings.value[0].count >= 1 },
    { name: '10 CPS Club', condition: () => cps.value >= 10 },
];

function checkAchievements() {
    for (let ach of achievementConditions) {
        if (ach.condition() && !unlockedAchievements.value.includes(ach.name)) {
            unlockedAchievements.value.push(ach.name);
        }
    }
}

const cpsInterval = setInterval(() => {
    cookies.value += cps.value;
    totalCookies.value += cps.value;
    checkAchievements();
    document.title = `🍪 ${cookies.value.toFixed(1)} cookies`;
}, 1000);

function buyBuilding(building) {
    if (cookies.value >= building.price) {
        cookies.value -= building.price;
        building.price += Math.ceil(building.price * 0.15);
        building.count++;
        checkAchievements();
    }
}


function clickCookie() {
    cookies.value++;
    totalCookies.value++;
    checkAchievements();
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
                <img @click="clickCookie" class="is-rounded" src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" />
            </figure>

            <div class="box has-background-light mt-5">
                <h2 class="is-size-4">🏆 Achievements</h2>
                <ul>
                    <li v-for="ach in unlockedAchievements" :key="ach">✔️ {{ ach }}</li>
                </ul>
            </div>
        </div>

        <div class="column is-7 has-background-info">Second column</div>

        <div class="column is-2 has-background-warning">
            <button
                class="button is-large is-fullwidth is-primary"
                v-for="building in buildings"
                :key="building.name"
                :disabled="cookies < building.price"
                @click="buyBuilding(building)"
            >
                {{ building.name }} 🍪{{ building.price }} #{{ building.count }}
            </button>
        </div>
    </div>
</template>

