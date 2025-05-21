<script setup>

import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import SimplePagination from '../components/SimplePagination.vue';
import Pagination from '../components/Pagination.vue';

const characters = ref([]);
const info = ref({});
const currentPage = ref(1);
const searchValue = ref('');
const error = ref('');
await getCharacters('https://rickandmortyapi.com/api/character');


async function getCharacters() {
    try {
        let response = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: currentPage.value,
                name: searchValue.value,
            }
        });
        console.log(response.data);
        characters.value = response.data.results;
        info.value = response.data.info;
    } catch(err) {
        console.log(err);
        error.value = 'No results found';
        characters.value = [];
        info.value = null;
    }
}

async function next() {
    currentPage.value++;
    await getCharacters();   
}

async function prev() {
    currentPage.value--;
    await getCharacters();
}

async function page(page) {
    currentPage.value = page;
    await getCharacters();
}

async function search(){
    error.value='';
    currentPage.value = 1;
    await getCharacters();
}

</script>
<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input v-model="searchValue" class="input" type="text" placeholder="Find character">
        </div>
        <div class="control">
            <button @click="search" class="button is-info">
                Search
            </button>
        </div>
    </div>

    <Pagination v-if="info" :info="info" :current="currentPage" @next="next" @prev="prev" @page="page"></Pagination>
    <div class="columns is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
    <h1 v-if="error" class="is-size-1">{{ error }}</h1>
</template>