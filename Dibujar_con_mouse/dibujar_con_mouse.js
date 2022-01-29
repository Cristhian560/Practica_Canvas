var pizarra = document.querySelector("#pizarra");
var pincel = pizarra.getContext("2d");
var color_pincel = "black";
//canvas para seleccionar colores 
var seleccion_color = document.querySelector("#colores");
var pincel_2 = seleccion_color.getContext("2d");

Cuadrado(0,0,100,100,"black");
Cuadrado(100,0,100,100, "red")
Cuadrado(200,0,100,100, "blue")
Cuadrado(300,0,100,100, "green")

function CambiarColor(evento){
	CoordenadasClick(evento,seleccion_color)
	if(CoordenadaXClick>0 && CoordenadaXClick<100){
		color_pincel = "black";
	}
	else if (CoordenadaXClick>100 && CoordenadaXClick<200){
		color_pincel = "red";
	}
	else if(CoordenadaXClick>200 && CoordenadaXClick<300){
		color_pincel = "blue";
	}
	else if (CoordenadaXClick>300 && CoordenadaXClick<400){
		color_pincel = "green";
	}
}
function Cuadrado(x,y,ancho,alto,color){
	pincel_2.beginPath();
	pincel_2.fillStyle = color;
	pincel_2.rect(x,y,ancho,alto);
	pincel_2.fill();
}

var CoordenadaXClick = 0 ;
var CoordenadaYClick = 0 ;

var puedo_dibujar = false;

function Circulo(x,y,radio,color){
	pincel.beginPath();
	pincel.fillStyle = color;	
	pincel.arc(x, y,radio,0,Math.PI*2)
	pincel.fill();
}
function Dibujar(evento){
	if(puedo_dibujar == true){
		CoordenadasClick(evento,pizarra); 
		Circulo(CoordenadaXClick,CoordenadaYClick,3,color_pincel)
	}
}
function HabilitarDibujar(){
   	puedo_dibujar = true;
}
function DesabilitarDibujar(){
	puedo_dibujar = false;
} 
function CoordenadasClick(evento,p){
	CoordenadaXClick = evento.pageX - p.offsetLeft;
	CoordenadaYClick = evento.pageY - p.offsetTop;
}
//se ejecuta cuando se hace click izq o derecho
pizarra.onmousedown = HabilitarDibujar;
seleccion_color.onmousedown = CambiarColor;
//se ejecuta cuando se deja de precionar el click izq o derecho
pizarra.onmouseup = DesabilitarDibujar;
//ejecuta la funcion Dibujar cuando se mueve el mouse
pizarra.onmousemove = Dibujar;

