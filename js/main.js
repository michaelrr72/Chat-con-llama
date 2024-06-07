$(document).ready(function () {
    $("#mi-boton").on("click", function () {
        const userInput = $("#txt-buscar").val();
        if (userInput.trim() !== "") {
            // Añadir el mensaje del usuario al historial del chat
            $("#chat-historial").append('<div class="text-right"><strong>Usuario:</strong> ' + userInput + '</div>');

            $.ajax({
                url: "http://localhost:11434/api/generate",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({model:"llama2", stream:false, prompt: userInput}),
                contentType: "application/json",
                success: function (data) {
                    // Añadir la respuesta del modelo al historial del chat
                    $("#chat-historial").append('<div class="text-left"><strong>Ollama:</strong> ' + data.response + '</div>');
                    // Limpiar el campo de entrada
                    $("#txt-buscar").val('');
                    // Hacer scroll hacia abajo para ver el último mensaje
                    $("#chat-historial").scrollTop($("#chat-historial")[0].scrollHeight);
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    console.error("Error en la solicitud:", status, error);
                    $("#chat-historial").append('<div class="text-left text-danger"><strong>Error:</strong> No se pudo obtener una respuesta del servidor.</div>');
                }
            });
        }
    });
});
