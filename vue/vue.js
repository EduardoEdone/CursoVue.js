var app = new Vue({
    el: '#vue',
data: {
    mensaje: 'Aprende Vue.js Facilmente',
    src: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        mostrarMensaje: function(){
            return this.mensaje;
        }
    }
})