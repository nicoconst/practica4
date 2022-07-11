function fondo() {
    var canvas = document.getElementById("espacio_juego");
    var context = canvas.getContext("2d");
    context.fillStyle = "#8CD7FA";
    context.fillRect(0, 0, 820, 260);

    var img = document.getElementById("fondo");
    context.drawImage(img, 0, 220, 820, 130);

};

var posicionX = 0;
var intervalo;

function personaje(){
    window.onkeydown = function obtenerTecla(valor) {
        tecla = valor.key
        if (posY > 0 && (tecla == 'w' || tecla == 'W' || tecla == 'ArrowUp')) {
            posY -= 10
        }
    };

    var canvas2 = document.getElementById("espacio_juego");
    var context2 = canvas2.getContext("2d");
    var img2 = document.getElementById("luffy");
    context2.clearRect(0, 0, 820, 340);
    context2.drawImage(img2, posicionX, 90, 150, 200);
    
    if (posicionX < 700){
        posicionX += 20;
        console.log("estoy vivo");
    }
    else{
        clearInterval(intervalo)
    }
     
};

function animarPersonaje(){
    intervalo = setInterval("personaje()",200);
};