// ERK TECH - DÍA 8
// DOM, eventos y validación de formularios


// =========================================
// ELEMENTOS DEL DOM
// =========================================

const tbody = document.querySelector("#tabla-productos");
const buscador = document.querySelector("#buscador");
const form = document.querySelector("#form-producto");


// =========================================
// FORMATO DE MONEDA
// =========================================

const moneda = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});


// =========================================
// CREAR FILA DE PRODUCTO
// =========================================

function crearFila(producto) {

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${producto.id}</td>

        <td>${producto.nombre}</td>

        <td>${producto.categoria}</td>

        <td>${moneda.format(producto.precio)}</td>

        <td>${producto.stock}</td>

        <td>

            <button
                type="button"
                class="boton-mini"
                data-accion="editar"
                data-id="${producto.id}">
                Editar
            </button>

            <button
                type="button"
                class="boton-mini boton-peligro"
                data-accion="eliminar"
                data-id="${producto.id}">
                Eliminar
            </button>

        </td>
    `;

    return tr;
}


// =========================================
// PINTAR TABLA
// =========================================

function pintarTabla(lista) {

    const filas = lista.map(crearFila);

    tbody.replaceChildren(...filas);

}


// Mostrar todos los productos inicialmente

pintarTabla(productos);


// =========================================
// BUSCADOR EN TIEMPO REAL
// =========================================

buscador.addEventListener("input", () => {

    const texto =
        buscador.value
            .toLowerCase()
            .trim();


    const resultados =
        productos.filter(producto =>

            producto.nombre
                .toLowerCase()
                .includes(texto)

            ||

            producto.categoria
                .toLowerCase()
                .includes(texto)

        );


    pintarTabla(resultados);

});


// =========================================
// EVENT DELEGATION
// =========================================

tbody.addEventListener("click", (event) => {

    const boton =
        event.target.closest(
            "button[data-accion]"
        );


    if (!boton) {
        return;
    }


    const {
        accion,
        id
    } = boton.dataset;


    if (accion === "editar") {

        console.log(
            "Editar producto:",
            Number(id)
        );

    }


    if (accion === "eliminar") {

        console.log(
            "Eliminar producto:",
            Number(id)
        );

    }

});


// =========================================
// FUNCIONES PARA MENSAJES
// =========================================

function mostrarError(campo, mensaje) {

    const error =
        document.querySelector(
            `#error-${campo}`
        );


    error.textContent = mensaje;

    error.classList.add("visible");

}


function limpiarError(campo) {

    const error =
        document.querySelector(
            `#error-${campo}`
        );


    error.textContent = "";

    error.classList.remove("visible");

}


// =========================================
// VALIDACIÓN DEL FORMULARIO
// =========================================

form.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
        form.elements.nombre;

    const categoria =
        form.elements.categoria;

    const precio =
        form.elements.precio;

    const stock =
        form.elements.stock;


    // Limpiar errores anteriores

    limpiarError("nombre");
    limpiarError("categoria");
    limpiarError("precio");
    limpiarError("stock");


    // Limpiar validaciones personalizadas

    nombre.setCustomValidity("");
    categoria.setCustomValidity("");
    precio.setCustomValidity("");
    stock.setCustomValidity("");


    let formularioValido = true;


    // =====================================
    // NOMBRE
    // =====================================

    if (nombre.value.trim().length < 3) {

        const mensaje =
            "El nombre debe tener mínimo tres caracteres.";

        nombre.setCustomValidity(mensaje);

        mostrarError(
            "nombre",
            mensaje
        );

        formularioValido = false;

    }


    // =====================================
    // CATEGORÍA
    // =====================================

    if (categoria.value === "") {

        const mensaje =
            "Debes seleccionar una categoría.";

        categoria.setCustomValidity(mensaje);

        mostrarError(
            "categoria",
            mensaje
        );

        formularioValido = false;

    }


    // =====================================
    // PRECIO
    // =====================================

    if (Number(precio.value) <= 0) {

        const mensaje =
            "El precio debe ser mayor que cero.";

        precio.setCustomValidity(mensaje);

        mostrarError(
            "precio",
            mensaje
        );

        formularioValido = false;

    }


    // =====================================
    // STOCK
    // =====================================

    if (
        Number(stock.value) < 0
        ||
        !Number.isInteger(
            Number(stock.value)
        )
    ) {

        const mensaje =
            "El stock debe ser un número entero no negativo.";

        stock.setCustomValidity(mensaje);

        mostrarError(
            "stock",
            mensaje
        );

        formularioValido = false;

    }


    // =====================================
    // RESULTADO
    // =====================================

    if (!formularioValido) {

        form.reportValidity();

        return;

    }


    console.log(
        "Formulario válido."
    );

});