<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            
            <div class="form">
            <label for="nombre">Nombre:</label> 
            <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="ingresa tu nombre" />
            <ErrorMessage name="nombre"></ErrorMessage>
            </div>
           
            <div class="form">
            <label for="email">Email:</label> 
            <Field v-model="email"  type="email" name="email"  id="email" placeholder="ingresa tu mail" />
            <ErrorMessage name="email"></ErrorMessage>
            <div class="form"> 
            <button type="submit">Registrar</button></div>
            </div>
        </Form>
    </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import {useRegistrarStore} from '../stores/registrarStore';
import {ref} from 'vue';

const RegistrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');


const onSubmit = () => {
    RegistrarStore.guardarRegistro(nombre.value, email.value)
    console.log('se ha enviado correctamente');

}
</script>
<style scoped>
.form {margin-bottom: 20px;} 
</style>