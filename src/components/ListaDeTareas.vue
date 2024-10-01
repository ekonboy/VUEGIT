<template>
    <div>
      <h2>Lista de tareas:</h2>
      <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
      <ul>
        <li v-for="(tarea, index) in tareas" :key="tarea.id">{{ tarea.texto }}
            <button @click="borrarTarea(tarea)">Borrar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Cambiamos la estructura de las tareas para que tengan un id único
  const tareas = ref([]);
  const nuevaTarea = ref("");
  
  // Función para generar un id único
  const generarIdUnico = () => Math.random().toString(36).substr(2, 9);
  
  const addTarea = () => {
    if (nuevaTarea.value.trim() !== "") {
      tareas.value.push({
        id: generarIdUnico(),
        texto: nuevaTarea.value
      });
      nuevaTarea.value = "";
    }
  };

  const borrarTarea = (tarea) => {
  tareas.value = tareas.value.filter((t) => t.id !== tarea.id);

};

  </script>
  
  <style></style>
  