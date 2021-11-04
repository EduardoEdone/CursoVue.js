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

Vue.component('lista-de-tareas', {
    template: `<ul class="list-group">
    <li v-for="(tarea, indice) of tareas" class="list-group-item" :class="{terminada: tarea.terminada}">
        {{tarea.texto}}
        <span class="pull-right">
            <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
            @click="tarea.terminada = !tarea.terminada">
            </button>
            <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
            @click="borrar(indice)">
            </button>
        </span>
    </li>
</ul> `,

data: function() {
    return data;
},
methods: {
    borrar: function (indice){
        this.tareas.splice(indice, 1)
    }
}
})

var app = new Vue ({
    el: '#app',
    data:data,
    methods: {

    }
})