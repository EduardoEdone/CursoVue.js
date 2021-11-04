new Vue ({
    el: '#app',
    data: {
        titulo: 'Lista De Tareas',
        tareas: [
            {
                texto: 'Aprender Vue.js',
                terminar: false
            },
            {
                texto: 'Aprender Angular 2',
                terminar: false
            },
            {
                texto: 'Aprender Ionic 2',
                terminar: false
            }
        ],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push ({
                    texto: texto,
                    terminar: false
                })
            }
            this.nuevaTarea ='';
        }
    }
})