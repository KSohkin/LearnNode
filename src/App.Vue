<script setup>

import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

</script>

<template>
        <Tabs></Tabs>
     <div class="container" v-if="$route.meta.container !== false">
        <section class="section">
            <Suspense>
                <RouterView></RouterView>
            </Suspense>
        </section>
    </div>
    <Suspense v-else>
        <RouterView></RouterView>
    </Suspense>
</template>

<style>

</style>