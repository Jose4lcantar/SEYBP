const socket = io();

var envairData = document.getElementById("enviarData");
var mensajeHtml = document.getElementById("mensaje");

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    if (userId) {

        socket.emit("clienteEditarUsuarioId", userId);
    }


    socket.on("servidorUsuarioEditadoId", (usuario) => {
        document.getElementById("id").value = usuario._id;
        document.getElementById("nombre").value = usuario.nombre;
        document.getElementById("usuario").value = usuario.usuario;
        document.getElementById("password").value = usuario.pass;
    });
});


envairData.addEventListener("submit", (e) => {
    e.preventDefault();

    var usuario = {
        _id: document.getElementById("id").value,
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        pass: document.getElementById("password").value,
    };

    socket.emit("clienteEditarUsuario", usuario);
    socket.on("servidorUsuarioEditado", (usuario) => {
        mensajeHtml.innerHTML = "Usuario Editado";
        setTimeout(() => {
            mensajeHtml.innerHTML = "";
            location.href = "index.html";
        }, 2000);
    });
});