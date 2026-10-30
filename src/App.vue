<script setup>
import {ref} from 'vue';

const count = ref(0);
</script>

<template>
  <div @click="count++" class="btn-cnt">Count is {{ count }}</div>

</template>
<style>
</style>
