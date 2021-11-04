var data = {
    tareas: [
        {
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender Angular 2',
            terminada: false
        },
        {
            texto: 'Aprender Ionic 2',
            terminada: false
        }
    ],
    nuevaTarea: ''
}

Vue.component('titulo', {
    template: '<h2>{{titulo}}</h2>',
    data: function(){
        return {titulo: '-Lista De Tareas-'}
    }
})

Vue.component('nueva-tarea', {
    template: `<div class="input-group">
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
</div> `,

data: function() {
    return data;
},
methods: {
    agregarTarea: function() {
        var texto = this.nuevaTarea.trim();
        if (texto) {
            this.tareas.push ({
                texto: texto,
                terminada: false
            })
        }
        this.nuevaTarea ='';
    },
}
})

var app = new Vue ({
    el: '#app',
    data:data,
    methods: {
        borrar: function (indice){
            this.tareas.splice(indice, 1);
        }
    }
})