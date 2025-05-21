<script setup>
import axios from 'axios';
import { ref } from 'vue';

let messages = ref([]);
let input = ref(''); 

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  //socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
  let data = JSON.parse(event.data);
  if(data.type === 'messages'){
    messages.value = data.messages;
  } else if (data.type === 'message') {
    messages.value.push(data);
  }
});


async function send(){
  socket.send(JSON.stringify({type:'message', message: input.value}));
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