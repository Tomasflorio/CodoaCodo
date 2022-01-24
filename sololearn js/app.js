// escribir en la pagina
document.write("Hola mundo <br>")//se puede agregar cosas de html

// escribir en consola
console.log("hola mundo")

// Alertas
//alert("Hola mundo")

//declarar variables
var num = 42;
document.write(num+"<br>")
// tipo string
var name = "hola"
//para meter comillas en string
var hola = "hola \"hola\""
document.write(hola+"<br>")
// decrement 
var a=0,b=10
var a = b--
console.log(a)
console.log(b)
// 
var number = 20
number *= 5
console.log(number)
// comparacion == equals / === identical(igual y mismo tipo) / != distinto / !== no identical.
// y= && / || or / !
// condicional en una linea
var age = 11
var isadult = (age <18)?"no":"si";
console.log(isadult)
// condicional con if
if(true){
    console.log("true")
}
else if(true){
    console.log("false")
}
// switch
var caso = 1
switch(caso){
    case 1:
        console.log("caso 1")
        break;
    case 2:
        console.log("caso 2")
        break;
    default://hace esto si no existe el caso en el switch
        console.log("default")
}
//FOR (statement1,statement2,statement3) statement1 lo hace antes de empezar el loop, statement2 condicion para correr el loop, statement3 lo que se ejecuta cada vez
for(i=1;i<=5; i++ ){
    console.log(i)
}
//while
var b = 0
while(b<=10){
    document.write(b+"<br>")
    b++
}
// do hace antes de ver si termina
var f = 20
do{
    document.write(f+"<br>")
    f++
}while(f<=25)
// break termina el loop antes
console.log("break")
for(i=1;i<=5; i++ ){
    if(i==3){
        break;
    }
    console.log(i)
}
// continue continua el loop saltando el paso del condicional
console.log("continue")
for(i=1;i<=5; i++ ){
    if(i==3){
        continue;
    }
    console.log(i)
}
//definicion de funciones
function name(){
    name()
    return("Hola")
}
//alert box.
//alert("hola \nmundo")

//prompt box se usa para perdir un valor
//var user = prompt("Entra tu usuario")
//alert(user)

//confirm box para verificar algo
/*var result = confirm("salir?");
if (result == true){
    alert("saliendo")
}else{
    alert("quedandose")
}*/


// objetos
var person = {
    name:"jhon",age:21,favcolor:"AZUL",height:183
};
//acceso a propiedades de objeto
var age = person.age
var age2 = person['age']
//contar el numero de caracteres de una propiedad
document.write("objeto length <br>")
document.write(person.favcolor.length+"<br>")

// constructor de un objeto tiene que ir la primera letra con mayuscula
function Person(name,age,color){
    this.name = name;
    this.age = age;
    this.favcolor = color;
}

// crear un objeto
var p1 = new Person("tomas",21,"Azul");
var p2 = new Person("juan",41,"verde");
document.write(p1.age+"<br>")
document.write(p2.name+"<br>")

// metodos en objetos 
function Cat(name,age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name
    }
}
var c = new Cat("juan2",5);
document.write(c.name+"<br>")
c.changeName("pulga")
document.write(c.name+"<br>")
// Crear Arrays
var courses = new Array("html","css","js")
var cursos = new Array(3)
cursos[0]="html"
cursos[1]="css"
cursos[2]="js"
var array = ["html","css","js"]
//acceder al array
console.log(courses[0])
courses[1] = "C++"//cambia el segundo elemento
console.log(courses[1])
//largo del array
console.log(cursos.length)
// concatenar arrays
var cu = cursos.concat(courses)
// arrays asociativos
var persona = []
persona["name"] = "juan"
persona["edad"] = 50
console.log(persona["name"])
//Objeto math
document.write(Math.PI+"<br>")
document.write(Math.E+"<br>")
document.write(Math.round(Math.PI)+"<br>")
document.write(Math.sqrt(36)+"<br>")
// Objeto DATE
function printTime() {
    var d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    document.body.innerHTML = h+":"+m+":"+s    
}
//setInterval(printTime,1000)

//DOM
// innerHTML se usa para cambiar el contenido
/*    var p = document.createElement("p");
    var node = document.createTextNode("Some new text")
    p.appendChild(node);
    var div = document.getElementById("demo");
    div.appendChild(p)*/



