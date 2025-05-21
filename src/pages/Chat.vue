<script setup>
import axios from 'axios';
import { ref } from 'vue';

let messages = ref([]);
let input = ref(''); 

let res = await axios.get('http://localhost:3000');
messages.value = res.data;

setInterval(async () => {
    let date = messages.value[messages.value.length-1]?.date ?? null;
    let res = await axios.get('http://localhost:3000', {
        params: {
            date: new Date(date)
        }
    });
    messages.value.push(...res.data);
}, 1000);


async function send(){
  let res = await axios.post('http://localhost:3000', {
    message: input.value
  });
  console.log(res);
  input.value = '';
}
</script>

<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="input" @keypress.enter="send">
        </div>
        <div class="control">
            <button class="button is-info" @click="send">
                Send
            </button>
        </div>
    </div>
    <div v-for="message in messages" class="notification is-primary">
        {{ message.message }}
    </div>
</template>