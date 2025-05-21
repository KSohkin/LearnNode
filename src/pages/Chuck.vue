<script setup>
import { ref } from 'vue';
import axios from 'axios';




let joke = ref('');

// axios.get('https://api.chucknorris.io/jokes/random').then(res => {
//     joke.value = res.data.value;
// }).catch(err => {
//     console.log(err);
// });

try {
    let response = await axios.get('https://api.chucknorris.io/jokes/random');
    joke.value = response.data.value;
} catch (err) {
    console.log(err);
}
</script>

<template>
    {{ joke }}
</template>