<template>
   <h4>La temperatura actual es: {{weatherStore.temperatura}} º</h4> 
</template>
<script setup>
import {useWeather} from '../composables/useWeather';
import {onMounted } from 'vue';
import {useWeatherStore} from '../stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(()=>{
    useWeather();
})
</script>

<style scope></style>