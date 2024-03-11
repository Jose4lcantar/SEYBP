const socket = io();

var enviarDatos = document.getElementById("enviarDatos");
enviarDatos.addEventListener("submit", (e) => {
    e.preventDefault();

    var pregunta = document.getElementById("pregunta").value;
    var chat = document.getElementById("chat");

    socket.emit("pregunta", pregunta);

    chat.innerHTML = "";

    socket.on("respuesta", (respuesta) => {
        chat.innerHTML = respuesta;
    });
});
