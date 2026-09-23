// ERK TECH - DÍA 7 Datos de prueba de productos y pedidos

const productos = [
    {
        id: 1,
        nombre: "Teclado mecánico",
        categoria: "Periféricos",
        precio: 120000,
        stock: 14
    },
    {
        id: 2,
        nombre: "Monitor 24 pulgadas",
        categoria: "Pantallas",
        precio: 890000,
        stock: 0
    },
    {
        id: 3,
        nombre: "Mouse inalámbrico",
        categoria: "Periféricos",
        precio: 65000,
        stock: 32
    },
    {
        id: 4,
        nombre: "SSD 1 TB",
        categoria: "Almacenamiento",
        precio: 320000,
        stock: 7
    },
    {
        id: 5,
        nombre: "Memoria RAM 16 GB",
        categoria: "Componentes",
        precio: 280000,
        stock: 4
    },
    {
        id: 6,
        nombre: "Tarjeta gráfica",
        categoria: "Componentes",
        precio: 1850000,
        stock: 3
    },
    {
        id: 7,
        nombre: "Audífonos",
        categoria: "Periféricos",
        precio: 180000,
        stock: 12
    },
    {
        id: 8,
        nombre: "Webcam HD",
        categoria: "Periféricos",
        precio: 210000,
        stock: 6
    },
    {
        id: 9,
        nombre: "Disco duro 2 TB",
        categoria: "Almacenamiento",
        precio: 290000,
        stock: 2
    },
    {
        id: 10,
        nombre: "Monitor 27 pulgadas",
        categoria: "Pantallas",
        precio: 1250000,
        stock: 5
    },
    {
        id: 11,
        nombre: "Procesador",
        categoria: "Componentes",
        precio: 980000,
        stock: 8
    },
    {
        id: 12,
        nombre: "Teclado inalámbrico",
        categoria: "Periféricos",
        precio: 95000,
        stock: 18
    },
    {
        id: 13,
        nombre: "Fuente de poder",
        categoria: "Componentes",
        precio: 420000,
        stock: 4
    },
    {
        id: 14,
        nombre: "Memoria RAM 8 GB",
        categoria: "Componentes",
        precio: 150000,
        stock: 10
    },
    {
        id: 15,
        nombre: "Base para portátil",
        categoria: "Accesorios",
        precio: 110000,
        stock: 1
    }
];

const pedidos = [
    {
        id: 1,
        cliente: "Cliente 01",
        productoId: 1,
        cantidad: 2,
        estado: "Entregado"
    },
    {
        id: 2,
        cliente: "Cliente 02",
        productoId: 3,
        cantidad: 4,
        estado: "Pendiente"
    },
    {
        id: 3,
        cliente: "Cliente 03",
        productoId: 4,
        cantidad: 1,
        estado: "Entregado"
    },
    {
        id: 4,
        cliente: "Cliente 04",
        productoId: 7,
        cantidad: 3,
        estado: "En proceso"
    },
    {
        id: 5,
        cliente: "Cliente 05",
        productoId: 10,
        cantidad: 1,
        estado: "Entregado"
    },
    {
        id: 6,
        cliente: "Cliente 06",
        productoId: 5,
        cantidad: 2,
        estado: "Pendiente"
    },
    {
        id: 7,
        cliente: "Cliente 07",
        productoId: 8,
        cantidad: 1,
        estado: "Entregado"
    },
    {
        id: 8,
        cliente: "Cliente 08",
        productoId: 12,
        cantidad: 5,
        estado: "En proceso"
    }
];