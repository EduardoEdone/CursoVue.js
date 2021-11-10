<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"
                    :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import ListaTareas from './ListaTareasComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import Titulo from './TituloComponent.vue'

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data () {
    return {
      titulo : "* Lista De Tareas *",
      tareas: [],
    }
  },
  methods: {
    actualizarContador() {
      this.numTareas++;
    }
  },
  created() {
    this.$http.get('')
                .then(respuesta => {
                  return respuesta.json();
                })
                .then(respuestaJson => {
                  for(let id in respuestaJson)
                  {
                    this.tareas.push(respuestaJson[id]);
                  }
                })
  }
}
</script>

<style>

</style>