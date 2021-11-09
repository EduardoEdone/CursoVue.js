<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary"
        @click="componenteSeleccionado = 'iniciarSesion'">Iniciar Sesion</button>
        <button class="btn btn-primary"
          @click="componenteSeleccionado = 'cambiarClave'">Cambiar Contraseña</button>
    
    <keep-alive>
    <component :is="componenteSeleccionado"></component>
    </keep-alive>
    
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue'
import IniciarSesion from './IniciarSesion.vue'
import CambiarClave from './CambiarClave.vue'
export default {
  components: {
      mostrarFormulario: MostrarFormulario,
      iniciarSesion: IniciarSesion,
      cambiarClave: CambiarClave
    },
  data () {
    return {
      componenteSeleccionado: 'iniciarSesion'
    }
  }
}
</script>

<style scoped>

</style>