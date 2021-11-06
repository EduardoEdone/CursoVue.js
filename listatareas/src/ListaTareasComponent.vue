<template>
   <ul class="list-group">
    <li v-for="(tarea, indice) of tareas" class="list-group-item"
    :class="{terminada: tarea.terminada}">
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
    props: ['tareas']
}
</script>

<style>
    .terminada {
    color: gray;
    text-decoration: line-through;
}
</style>