function socket(io) {
    io.on("connection", (socket) => {
        socket.on("pregunta", (pregunta) => {
            var respuesta = obtenerRespuesta(pregunta);
            socket.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuesta(pregunta) {
    switch (pregunta) {
        case "1":
            return "Hardware: Componentes físicos. Software: Programas y aplicaciones.";
        case "2":
            return "IA: Capacidad de las máquinas para tareas inteligentes.";
        case "3":
            return "SO: Gestión de recursos, interfaz de usuario, administración de archivos.";
        case "4":
            return "Redes sociales: Conexión y comunicación en línea.";
        case "5":
            return "Almacenamiento en la nube: Acceso remoto a datos.";
        default:
            return "Lo siento, no tengo una respuesta para esa pregunta.";
    }
}

module.exports = socket;
