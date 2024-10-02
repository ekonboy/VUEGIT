<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
            <li><router-link to="/registrar">Registrar</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/contador/registro/stores/registrarStore';
import { ref, watch } from 'vue';

const RegistrarStore = useRegistrarStore();
const nombre = ref(RegistrarStore.nombre);
const email = ref(RegistrarStore.email);



// Si `nombre` es un valor reactivo dentro de `RegistrarStore`, también puedes hacer que el `watch` observe directamente el valor dentro de la tienda:
watch(() => RegistrarStore.nombre, (newValue) => {
    //console.log(`El nombre en la tienda ha cambiado a ${newValue}`);
    nombre.value = newValue;
});

watch(() => RegistrarStore.email, (newValue) => {
    email.value = newValue;
});


</script>

<style>
.sidebar {
    width: 200px;
    background-color: aquamarine;
    padding: 20px;
}
</style>
