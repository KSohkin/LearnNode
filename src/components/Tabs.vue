<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

console.log(router.getRoutes(), route);

</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="(item,key) in $router.getRoutes()" :class="{'is-active': item.path === $route.path}" >
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>