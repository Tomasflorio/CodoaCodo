alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola!');
/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2=18;
let hayClases=true;
let terminoLaClase=false;
/*Tipos,undefined, numero, String Boolean,Objeto, arreglo, chart, función*/
console.log(PI*num2);
console.log(num2 + 36 + " " +otra_variable)
/*Condicionales*/
hayClases=false;
if(hayClases == true && terminoLaClase != true){
    console.log('Nos conectamos a la veideollamada!')
}else{
    console.log('Salimos a celebrar el día del Estudiante!')
}
if(hayClases == false || terminoLaClase == true){
    console.log('Salimos a celebrar el día del Estudiante!');
}

let elemento = document.getElementById("principal");
// console.log(elemento)
elemento.innerHTML="MI valor para innerHTML"
elemento.innerHTML+='<p>' + otra_variable + '</p>';
document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>")
document.write("<h3>Cómo están?</h3>")

if(nombre_variable == undefined){
    elemento.innerHTML+="Estamos con una variable sin valor definido!"
    elemento.innerHTML+="<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elias</p>"
    elemento.style.backgroundColor="Blue"
    elemento.style.color="white"
}

/*let mensaje = prompt("introduce tu mensaje")
elemento.innerHTML+="<h3>"+mensaje+"</h3>"

elemento.innerHTML+=<div class=\"alert alert-success\" role=\"alert\">"+mensaje+"</div>""

let menu = prompt("selecciona el pedido: \n 1. milanesa con fritas \n 2.milanesa napo\n 3. fritas");

if(menu == '1' ){
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">mila</div>"
}else if(menu === '2'){
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">napo</div>"
}else if(menu === '3'){
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Fritas</div>"
}else{
    alert('Debes elejir opcin valida')
}

switch (menu) {
    case '1':
            elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">mila</div>"

        break;
    
    default:
            alert('Debes elejir opcin valida')
        break

}*/

let num = parseInt(prompt("Ingresa primer numero"))
let num4 = parseInt (prompt("Ingresa segundo numero"))
let resul ="el resultado de la suma es "+ (num + num4);