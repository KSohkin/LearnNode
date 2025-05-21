<script setup>

function vibrate(){
    navigator.vibrate(200);
}

function starwars() {
    navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
}

function location() {
    navigator.geolocation.getCurrentPosition((event) => {
        console.log(event);
    }, (error) => {
        console.log('error', error);
    });
}

</script>
<template>
    <button @click="vibrate" class="button is-primary">Vibrate</button>
    <button @click="starwars" class="button is-primary">Starwars</button>
    <button @click="location" class="button is-warning">Locate</button>
</template>