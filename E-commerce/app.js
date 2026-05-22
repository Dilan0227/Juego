Vue.createApp({

    data() {

        return {

            buscar: "",

            productos: [

                {
                    nombre: "Audifonos",
                    precio: 120,
                    imagen: "https://picsum.photos/200?1"
                },

                {
                    nombre: "Mouse Gamer",
                    precio: 80,
                    imagen: "https://picsum.photos/200?2"
                },

                {
                    nombre: "Teclado",
                    precio: 150,
                    imagen: "https://picsum.photos/200?3"
                },

                {
                    nombre: "Monitor",
                    precio: 500,
                    imagen: "https://picsum.photos/200?4"
                }

            ],

            carrito: []

        }

    },

    computed: {

        productosFiltrados() {

            return this.productos.filter(producto =>

                producto.nombre.toLowerCase()
                .includes(this.buscar.toLowerCase())

            )

        }

    },

    methods: {

        agregarCarrito(producto) {

            this.carrito.push(producto)

        },

        eliminarProducto(i) {

            this.carrito.splice(i, 1)

        }

    }

}).mount("#app")