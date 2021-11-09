<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Iniciar Sesión</h3>
        </div>
        
        <div slot="elementos">
        <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" class="form-control"
                    id="correo" placeholder="Escribe Tu Correo Electrónico">
        </div>
    <div class="form-group">
        <label for="clave">Contraseña</label>
            <input type="password" class="form-control"
                    id="clave" placeholder="Escribe Tu Contraseña">
          </div>
        </div>

        <div slot="boton">
        <button class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </mostrarFormulario>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue'
export default {
  components: {
      mostrarFormulario: MostrarFormulario
    },
  data () {
      return {

      }
  },
  destroyed() {
      console.log('El Componente Fue Destruido!')
  },
  activated() {
      console.log('El Componente Fue Activado!')
  },
  deactivated() {
      console.log('El Componente Fue Desactivado!')
  }
}
</script>

<style scoped>

</style>