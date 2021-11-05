<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
export default {
  components: {
    Titulo
  },
  data() {
    return {
      titulo: '- Lista De Tareas -'
    }
  }
}
</script>

<style>

</style>
