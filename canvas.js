function trazar(color, xInicial, xFinal, yInicial, yFinal) {
  lienzo.beginPath();
  lienzo.lineWidth = 3;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function bordesFull() {
  trazar(colorTrazo, 0, 0, 0, ancho);
  trazar(colorTrazo, 0, ancho, ancho, ancho);
  trazar(colorTrazo, ancho, ancho, ancho, 0);
  trazar(colorTrazo, ancho , 0, 0, 0);
}

function dibujarPorClick() {
  var lineas = document.getElementById('cantidad');
  var espacio = ancho / lineas.value;
  for (var i = 0; i < lineas.value; i++) {
    var xf = espacio * (i + 1);
    var yi = espacio * i;
    trazar(colorTrazo, 0, xf, yi, ancho);
    trazar(colorTrazo, ancho, xf, yi, 0);
  }
}

var canvas = document.getElementById("canvas");
var boton = document.getElementById('boton');
var lienzo = canvas.getContext("2d");
var ancho = canvas.width;
var colorTrazo = "green";

bordesFull();
boton.addEventListener("click", dibujarPorClick);
