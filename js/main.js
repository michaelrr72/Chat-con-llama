    $(document).ready(function () {
        $("#mi-boton").on("click", function (){
            $.ajax({
                url: "http://localhost:11434/api/generate",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({model:"llama2",stream:false,prompt:$("#txt-buscar").val()}),
                contentType: "application/json",
                success: function (data) {
                    $("#resultado").html(data.response);
                }
            })
        })
    })