Vue.createApp({

    data() {

        return {

            tarea: "",

            tareas: []

        }

    },

    methods: {

        agregar() {

            if (this.tarea != "") {

                this.tareas.push(this.tarea)

                this.tarea = ""

            }

        },

        eliminar(i) {

            this.tareas.splice(i, 1)

        }

    }

}).mount("#app")