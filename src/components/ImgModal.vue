<script setup>
import Modal from './Modal.vue';

defineProps(['active', 'url']);
</script>

<template>
    <Modal :active="active" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="url" alt="">
        </p>
    </Modal>
</template>