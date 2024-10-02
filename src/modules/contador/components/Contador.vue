<template>
<h1>Hola</h1>
{{ contadora }}
<button @click="incrementar">incrementar</button>

<button @click="decrementar">decrementar</button>


</template>

<style scoped>
h1 {color:red}



</style>


<script setup>
import {ref} from 'vue';
const contadora = ref (0);
const incrementar = () => {
  contadora.value++;
}
const decrementar = () => {
  contadora.value--;
}
</script>