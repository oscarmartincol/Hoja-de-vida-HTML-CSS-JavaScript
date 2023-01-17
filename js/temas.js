function cambiarFondo(opcion){
    var body = document.getElementById("body");
    var header = document.getElementById("header");
    var datos = document.getElementById("main");
    var titulo = document.getElementById("titulo");
    var contenido = document.getElementById("contenido");
    var nombre = document.getElementById("nombre");
    var division = document.getElementById("division");
    var vertical = document.getElementById("vertical");
    var vertical1 = document.getElementById("vertical1");
    

    if(opcion.value == "tema2"){
        body.style.backgroundColor = "black";
        header.style.backgroundColor = "#342D7E";
        datos.style.backgroundColor = "#254117";
        titulo.style.color = "#F3E5AB";
        contenido.style.color="#F3E5AB";
        nombre.style.color="#F3E5AB";
        division.style.borderColor = "antiquewhite";
        vertical.style.borderRightColor ="#FFDB58";
        vertical1.style.borderRightColor ="#FFDB58";

    } else if(opcion.value === "tema3"){
        body.style.backgroundColor = "#483C32";
        header.style.backgroundColor = "#F5F5DC";
        datos.style.backgroundColor = "#92C7C7";
        titulo.style.color = "#2b1b17";
        contenido.style.color="#2b1b17";
        nombre.style.color="#2b1b17";
        division.style.borderColor = "#463E3F";
        vertical.style.borderRightColor ="#493D26";
        vertical1.style.borderRightColor ="#493D26";

    }else if(opcion.value === "tema4"){

        body.style.backgroundColor = "#7FFFD4";
        header.style.backgroundColor = "#7d0552";
        datos.style.backgroundColor = "#571B7E";
        titulo.style.color = "#F3E5AB";
        contenido.style.color="#F3E5AB";
        nombre.style.color="#F3E5AB";
        division.style.borderColor = "antiquewhite";
        vertical.style.borderRightColor ="#FFDB58";
        vertical1.style.borderRightColor ="#FFDB58";
        

    }else{
        body.style.backgroundColor = "#566D7E";
        header.style.backgroundColor = "#34282C";
        datos.style.backgroundColor = "#EDE275";
        titulo.style.color = "black";
        contenido.style.color="black";
        nombre.style.color="#F3E5AB";
        division.style.borderColor = "antiquewhite";
        vertical.style.borderRightColor ="#493D26";
        vertical1.style.borderRightColor ="#493D26";
    }
    localStorage.setItem("tema", opcion.value); 
}