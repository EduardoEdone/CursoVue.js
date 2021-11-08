<template>
<div>
    <h2>{{tituloMayusculas()}}</h2>
    <h3>Tareas a hacer:</h3>
</div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            default: 'Tareas'
        }
    },
    methods: {
    tituloMayusculas() {
        return this.titulo.toUpperCase();
    }
}
}

</script>