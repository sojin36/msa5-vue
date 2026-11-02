<script setup>
import {ref} from 'vue';

const count = ref(0);
const bgColor = ref('');
const email = ref('aaa');

const toggleBgColor = ()=>{
  if(bgColor.value === ''){
    bgColor.value = 'bg-pink';
  } else {
    bgColor.value = '';
  }
}
</script>

<template>
  <div @click="count++" class="btn-cnt" :class="bgColor">Count is {{ count }}</div>
  <button @click="count = 0">Count Reset</button>
  <button @click="count--">Count Down</button>
  <button @click="bgColor = 'bg-pink'">Pink</button>
  <button @click="bgColor = ''">cadetblue</button>
  <button @click="toggleBgColor">Toggle</button>
  <br><br>
  <input type="text" name="email" id="email" v-model="email">
  {{ email }}
</template>


<style>
  .btn-cnt{
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
  .bg-pink{
    background-color: pink;
  }

</style>
