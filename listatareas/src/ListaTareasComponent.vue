<template>
   <ul class="list-group">
    <li v-for="(tarea, indice) of tareas" class="list-group-item"
    :class="{terminada: tarea.terminada}" :key="indice">
        {{tarea.texto}}
        <span class="pull-right">
            <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
            @click="estado(indice)">
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
        estado(indice) {
            terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada;
            let id = this.tareas[indice].id;

            this.$http.patch('tar/' + id + '.json',
            {
                terminada: terminada
            }).then(respuesta => {console.log(respuesta)})
        },
        borrar (indice) {
            let id = this.tareas[indice].id;
           this.tareas.splice(indice, 1)

           this.$http.delete('tar/' + id + '.json')
           .then(respuesta => {console.log(respuesta)})
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