<script setup>
import { computed } from 'vue';

let {info, current } = defineProps(['info', 'current']);

let pageNumbers = computed(()=>{
    let pages = [];
    for(let i = 1; i<=3; i++){
        pages[i] = i;
    }
    if(current > 2){
        pages.push('...');
    }
    if(current > 2 && current < info.pages-1) {
        for(let i = current-1; i<=current+1; i++){
            pages[i] = i;
        }
    }
    if(current < info.pages-2){
        pages.push('...');
    }
    for(let i = info.pages-2; i<=info.pages; i++){
        pages[i] = i;
    }
    return pages.filter(p => p);
});

console.log(pageNumbers.value);
</script>
<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <button @click="$emit('prev')" :disabled="!info.prev" class="pagination-previous">Previous</button>
        <button @click="$emit('next')" :disabled="!info.next" class="pagination-next">Next page</button>
        <ul class="pagination-list">
            <li v-for="page in pageNumbers">
                <span class="pagination-ellipsis" v-if="page === '...'">&hellip;</span>
                
                <a class="pagination-link is-current"
                    :aria-label="`Page ${page}`"
                    aria-current="page"
                    v-else-if="page === current">{{ page }}</a>

                <a href="#"
                    class="pagination-link"
                    :aria-label="`Goto page ${page}`"
                    v-else>{{ page }}</a>
            </li>
            <!-- <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 45">45</a></li>
            <li>
                <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 47">47</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 86">86</a></li> -->
        </ul>
    </nav>
</template>