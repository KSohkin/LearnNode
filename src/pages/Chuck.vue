<script setup>
import { ref } from 'vue';


let joke = ref('');

let response = await fetch('https://api.chucknorris.io/jokes/random');
let data = await response.json();
console.log(data);
joke.value = data.value;
</script>

<template>
    {{ joke }}
</template>