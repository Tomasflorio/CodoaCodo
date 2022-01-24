var t = setInterval(move,10)
var pos = 0
var box = document.getElementById("box")
function move() {
    if(pos>=150){
        clearInterval(t)//frena el timer

    }else{
    pos+=1;
    box.style.left=pos+"px";
    }
}
function show() {
    alert("hola")
    
}

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];
var num =0 
function next() {
    var slider = document.getElementById("slider")
    num++;
    if (num>= images.length){
        num = 0 
    }
    slider.src = images[num]
    
}

function prev() {
    var slider = document.getElementById("slider")
    num--;
    if(num<0){
        num = images.length-1
    }
    slider.src = images[num]
    
}
function validate() {
    var n1 = document.getElementById("num1")
    var n2 = document.getElementById("num2")
    if(n1.value != " " && n2.value != " "){
        if(n1.value==n2.value){
            return true
        }
    }
    alert("tienen que ser igual")
    return false
}

// ECMAScript 6
function varTest(){
    var x = 1 
    if(true){
        var x = 2 // same variable
        console.log(x)//2
    }
    console.log(x)//2
}
function letTest(){
    let x = 1 
    if(true){
        let x = 2 // diferent variable
        console.log(x) // 2
    }
    console.log(x) //1
}

// el let es comunmente usado en el for
for(let i = 0;i<3;i++){
    document.write(i)
}
// formas de mostrar en pantalla
const name2 = 'juan'
var msg = `hola ${name2}!`;
console.log(msg)

// definiciones de funciones 
const x = () => alert("hola");


