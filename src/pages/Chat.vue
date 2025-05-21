<script setup>
import axios from 'axios';
import { ref } from 'vue';

let messages = ref([]);
let input = ref(''); 

let res = await axios.get('http://localhost:3000');
messages.value = res.data;

longpoll();

function longpoll(){
    let date = messages.value[messages.value.length-1]?.date ?? null;
    axios.get('http://localhost:3000/longpoll', {
        params: {
            date: new Date(date)
        }
    }).then(res => {
        messages.value.push(...res.data);
        longpoll();
    });
}


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