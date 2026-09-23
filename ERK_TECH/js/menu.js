// ERK TECH - DÍA 8
// Menú lateral

const botonMenu = document.querySelector("#boton-menu");
const menuLateral = document.querySelector("#menu-lateral");


botonMenu.addEventListener("click", () => {

    const abierto = menuLateral.classList.toggle("abierto");

    botonMenu.setAttribute(
        "aria-expanded",
        abierto
    );

    botonMenu.setAttribute(
        "aria-label",
        abierto
            ? "Cerrar menú"
            : "Abrir menú"
    );

    botonMenu.textContent = abierto
        ? "✕"
        : "☰";

});