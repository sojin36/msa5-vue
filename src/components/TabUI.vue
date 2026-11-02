<script setup>
  import {ref} from 'vue';
  
  const tab = ref(true);
  // const tab2 = ref(true);
  // const tab3 = ref(true);
</script>

<template>

  <div class="container">
    <button @click="tab = 'profile'" class="box">프로필</button>
    <button @click="tab = 'setting'" class="box">설정</button>
    <button @click="tab = 'board'" class="box">게시판</button>
  </div>

  <div v-if="tab === 'profile'">
    프로필 페이지입니다.
  </div>

  <div v-else-if="tab === 'setting'">
    설정 페이지입니다.
  </div>

  <div v-else-if="tab === 'board'">
    게시판 페이지입니다.
  </div>
  

</template>

<style>
  .box{
    background-color: skyblue;
    margin: 10px;
    padding: 20px;
    width: 40px;
  }
</style>