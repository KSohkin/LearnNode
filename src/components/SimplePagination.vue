<script setup>
    defineProps(['info']);
</script>
<template>
    <div class="buttons">
        <button class="button is-primary" @click="$emit('prev')" :disabled="!info.prev">Prev</button>
        <button class="button is-primary" @click="$emit('next')" :disabled="!info.next">Next</button>
    </div>
</template>