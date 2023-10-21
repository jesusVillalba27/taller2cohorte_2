// Crear una tabla
var tabla = document.createElement("table");
tabla.style.border = "1px solid black"; // Bordes de la tabla
tabla.style.marginLeft="350px";
tabla.style.marginTop="100px";

var imagen1 = document.createElement("img");
imagen1.src = "../recursos/arbol.png"; // Reemplaza con la ruta de tu imagen
imagen1.alt = "Texto alternativo de la imagen"; // Agrega un texto alternativo para accesibilidad


var imagen2 = document.createElement("img");
imagen2.src = "../recursos/texto en rojo.png"; // Reemplaza con la ruta de tu imagen
imagen2.alt = "Texto alternativo de la imagen"; 


var imagen3 = document.createElement("img");
imagen3.src = "../recursos/poster titanic.png"; // Reemplaza con la ruta de tu imagen
imagen3.alt = "Texto alternativo de la imagen"; 


var imagen4 = document.createElement("img");
imagen4.src = "../recursos/frame free.png"; // Reemplaza con la ruta de tu imagen
imagen4.alt = "Texto alternativo de la imagen"; 

// Crear filas y celdas con colspan y rowspan sin bucles
var fila1 = document.createElement("tr");
fila1.style.border = "1px solid black"; // Bordes de la fila 1

var celda1 = document.createElement("td");
celda1.style.border = "1px solid black"; // Bordes de la celda 1
celda1.rowSpan=3;
celda1.appendChild(imagen1);
fila1.appendChild(celda1);


var celda12 = document.createElement("td");
celda12.style.border = "1px solid black"; // Bordes de la celda 2
celda12.appendChild(imagen2);
fila1.appendChild(celda12);

var fecha= document.createElement("strong");
fecha.textContent = "Thursday, october 11, 2001 ";

var celda13 = document.createElement("td");
celda13.style.border = "1px solid black"; // Bordes de la celda 2
celda13.style.textAlign="center";
celda13.appendChild(fecha);
fila1.appendChild(celda13);


var link = document.createElement("a");
link.href = "https://cecar.edu.co";
link.textContent = "text only";

var celda14 = document.createElement("td");
celda14.style.border = "1px solid black"; // Bordes de la celda 2
celda14.style.textAlign="right ";
celda14.appendChild(link);
fila1.appendChild(celda14);


tabla.appendChild(fila1);




var fila2 = document.createElement("tr");
fila2.style.border = "1px solid black";


var encabezadoH1 = document.createElement("h1");
encabezadoH1.textContent = "Sample Web page ";


var encabezado2H1 = document.createElement("h1");
encabezado2H1.textContent = " Table Layout";


var celda22 = document.createElement("td");
celda22.style.border = "1px solid black"; // Bordes de la celda 1
celda22.colSpan=2;
celda22.style.textAlign="center";
celda22.appendChild(encabezadoH1);
celda22.appendChild(encabezado2H1);
fila2.appendChild(celda22);

var celda23 = document.createElement("td");
celda23.style.border = "1px solid black"; // Bordes de la celda 1
fila2.appendChild(celda23);

tabla.appendChild(fila2);


var fila3=document.createElement("tr");
fila3.style.border = "1px solid black";
fila3.style.backgroundColor="#626495";
fila3.style.color="white"
var celda31 = document.createElement("td");
celda31.style.border = "1px solid black"; // Bordes de la celda 1
celda31.textContent = "HOME  |  DOWNLOAD  |  SITE INDEX  |  SEARCH  |  CONTACT US";
celda31.style.textAlign="center";
celda31.colSpan=3;
fila3.appendChild(celda31);

tabla.appendChild(fila3);


var fila4=document.createElement("tr");
fila4.style.border = "1px solid black";

var celda41 = document.createElement("td");
celda41.style.border = "1px solid black"; // Bordes de la celda 1
celda41.appendChild(imagen3);
fila4.appendChild(celda41);


var textop1 = document.createElement("p");
textop1.textContent = "This is just a corny way of showing you how a table can ";


var textop2 = document.createElement("p");
textop2.textContent = "organize the layout of a web page. Desingning a prototype";

var textop3 = document.createElement("p");
textop3.textContent = "by sketching in a piece of paper is agood place to start.";

var textop4 = document.createElement("p");
textop4.textContent = "You need to, however, have the skills to transfer that";


var textop5 = document.createElement("p");
textop5.textContent = "concept to HTML. Tables help you organize it.";



var celda42 = document.createElement("td");
celda42.style.border = "1px solid black"; // Bordes de la celda 1
celda42.colSpan=2;


celda42.appendChild(textop1)
celda42.appendChild(textop2)
celda42.appendChild(textop3)
celda42.appendChild(textop4)
celda42.appendChild(textop5)
fila4.appendChild(celda42);

var celda43 = document.createElement("td");
celda43.style.border = "1px solid black"; // Bordes de la celda 1
celda43.appendChild(imagen4);
fila4.appendChild(celda43);


tabla.appendChild(fila4);

// Agregar la tabla al cuerpo del documento
document.body.appendChild(tabla);