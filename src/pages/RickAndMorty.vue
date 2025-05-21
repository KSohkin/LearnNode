<script setup>

import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import SimplePagination from '../components/SimplePagination.vue';
import Pagination from '../components/Pagination.vue';

const characters = ref([]);
const info = ref({});
const currentPage = ref(1);
await getCharacters('https://rickandmortyapi.com/api/character');


async function getCharacters(url) {
    let response = await axios.get(url);
    console.log(response.data);
    characters.value = response.data.results;
    info.value = response.data.info;
}

async function next(){
    currentPage.value++;
    await getCharacters(info.value.next);    
}

async function prev(){
    currentPage.value--;
    await getCharacters(info.value.prev);
}

</script>
<template>
    <Pagination :info="info" :current="currentPage" @next="next" @prev="prev"></Pagination>
    <div class="columns is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>