var app = new Vue({
    el: '.vue',
data: {
    mensaje: 'Aprende Vue.js Facilmente'
    },
    methods: {
        mostrarMensaje: function(){
            return this.mensaje;
        }
        }
    }
})