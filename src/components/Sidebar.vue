<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ RegistrarStore.nombre }}</h3>
        <h3>Email: {{ RegistrarStore.email }}</h3>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
            <li><router-link to="/registrar">Registrar</router-link></li>
            <li><router-link to="/calcular">Calcular</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/contador/registro/stores/registrarStore';
const RegistrarStore = useRegistrarStore();


</script>

<style>
.sidebar {
    width: 200px;
    background-color: aquamarine;
    padding: 20px;
}
</style>
