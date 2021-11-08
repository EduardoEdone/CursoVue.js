<template>
   <ul class="list-group">
    <li v-for="(tarea, indice) of tareas" class="list-group-item"
    :class="{terminada: tarea.terminada}" :key="indice">
        {{tarea.texto}}
        <span class="pull-right">
            <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
            @click="tarea.terminada = !tarea.terminada">
            </button>
            <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
            @click="borrar(indice)">
            </button>
        </span>
    </li>
</ul>
</template>

<script>
export default {
    props: ['tareas'],
    methods: {
        borrar (indice) {
           this.tareas.splice(indice, 1);
        }
    }
}
</script>

<style>
    .terminada {
    color: cyan;
    text-decoration: line-through;
}
</style>