<template>
    <div class="input-group">
    <input type="text"
        placeholder="Escribe Una Nueva Tarea" 
        v-model="nuevaTarea"
        class="form-control"
        @keyup.enter="agregarTarea">
    <span class="input-group-btn">
        <button type="button" 
        @click="agregarTarea" 
        class="btn btn-primary">Agregar Tarea</button>
    </span>
</div>
</template>

<script>
import {bus} from './main'
export default {
    data () {
        return {
            nuevaTarea: ''
        }
    },
    props: ['tareas', 'actualizarContador'],
    methods: {
        agregarTarea(){
            var texto = this.nuevaTarea.trim();
            if (texto){
                this.tareas.push ({
                    texto: texto,
                    terminada: false
                })

                //this.actualizarContador();
                bus.actualizarContador(this.tareas.length)
            }
            this.nuevaTarea='';
            this.$http.post('tar.json',
            {
                texto:texto,
                terminada: false
            }).then(respuesta => console.log(respuesta));
        }
    },
    created(){
        bus.$emit('actualizarContador', this.tareas.length)
    }
}
</script>