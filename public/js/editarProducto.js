const socket = io();

var enviarData = document.getElementById("enviarData");
var mensajeHtml = document.getElementById("mensaje");

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        
        socket.emit("clienteEditarProducto", productId);
    }


    socket.on("servidorProductoEditado", (producto) => {
        document.getElementById("id").value = producto._id;
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("marca").value = producto.marca;
        document.getElementById("cantidad").value = producto.cantidad;
    });
});


enviarData.addEventListener("submit", (e) => {
    e.preventDefault();

    var producto = {
        _id: document.getElementById("id").value,
        nombre: document.getElementById("nombre").value,
        marca: document.getElementById("marca").value,
        cantidad: document.getElementById("cantidad").value,
    };

    socket.emit("clienteEditarProducto", producto);
    socket.on("servidorProductoEditado", (producto) => {
        mensajeHtml.innerHTML = "Producto Editado";
        setTimeout(() => {
            mensajeHtml.innerHTML = "";
            location.href = "productos.html";
        }, 2000);
    });
});
