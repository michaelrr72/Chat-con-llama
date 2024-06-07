# Chat Básico con Ollama y Ngrok

Este proyecto es una aplicación web simple que permite a los usuarios interactuar con el modelo de lenguaje Llama2 de Ollama a través de una interfaz de chat. La aplicación se comunica con el servidor de Ollama mediante una API expuesta a través de Ngrok.

## Requisitos

- Acceso a un servidor que ejecute Ollama.
- Ngrok instalado para exponer el servidor de Ollama a través de un túnel seguro.
- Un navegador web moderno.

## Configuración

1. **Configura Ngrok**: Asegúrate de tener Ngrok instalado y configurado en la máquina que ejecuta el servidor de Ollama. Ejecuta el siguiente comando para exponer el puerto donde se está ejecutando el servidor:

    ```sh
    ngrok http 11434 --host-header="localhost:11434"
    ```

    Esto te proporcionará una URL pública que puedes usar para acceder a tu servidor de Ollama. Ejemplo de URL: `https://xxxx-xxx-x-xxx-xxx.ngrok-free.app`.

## Uso

1. Abre `index.html` en tu navegador web.
2. Escribe un mensaje en la caja de texto y presiona el botón "Enviar".
3. Verás el mensaje del usuario y la respuesta del modelo de lenguaje en el historial del chat.

## Estructura del Proyecto



## Notas

- Este proyecto utiliza jQuery para manejar las solicitudes AJAX y la manipulación del DOM.
- Asegúrate de que el servicio de Ngrok esté activo y accesible mientras uses la aplicación.