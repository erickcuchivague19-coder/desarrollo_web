// ERK TECH - DÍA 7 Ejercicios con métodos de arreglos

// Formato de moneda colombiana
const moneda = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});


// 1. PRODUCTO MÁS CARO

const productoMasCaro = productos.reduce((productoActual, producto) => {
    return producto.precio > productoActual.precio
        ? producto
        : productoActual;
});

console.log("1. Producto más caro:");
console.log(productoMasCaro.nombre);
console.log(moneda.format(productoMasCaro.precio));


// 2. TOTAL DE UNIDADES POR CATEGORÍA

const unidadesPorCategoria = productos.reduce((resultado, producto) => {

    resultado[producto.categoria] =
        (resultado[producto.categoria] ?? 0) + producto.stock;

    return resultado;

}, {});

console.log("2. Total de unidades por categoría:");
console.log(unidadesPorCategoria);


// 3. PRODUCTOS CON STOCK MENOR A CINCO

const stockMenorCinco = productos
    .filter(producto => producto.stock < 5)
    .map(producto => ({
        nombre: producto.nombre,
        stock: producto.stock
    }));

console.log("3. Productos con stock menor a cinco:");
console.table(stockMenorCinco);


// 4. PROMEDIO DE PRECIO

const sumaPrecios = productos
    .map(producto => producto.precio)
    .reduce((suma, precio) => suma + precio, 0);

const promedioPrecio = sumaPrecios / productos.length;

console.log("4. Promedio de precio:");
console.log(moneda.format(promedioPrecio));


// DATOS DE PRUEBA

console.log("Productos:");
console.table(productos);

console.log("Pedidos:");
console.table(pedidos);