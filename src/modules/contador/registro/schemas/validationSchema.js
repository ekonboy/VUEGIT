import * as Yup from 'yup';

export const schema = Yup.object({
    nombre: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
  });