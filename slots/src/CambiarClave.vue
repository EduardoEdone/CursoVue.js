<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Cambiar Contraseña</h3>
        </div>
        
        <div slot="elementos">
        <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" class="form-control"
                    id="correo" placeholder="Escribe Tu Correo Electrónico">
        </div>
        </div>

        <div slot="boton">
        <button class="btn btn-primary">Cambiar Contraseña</button>
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

  }
}
</script>

<style scoped>

</style>