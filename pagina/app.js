let elemento = document.querySelector("principal");
let todo = [];
todo.forEach(m =>{
    elemento.innerHTML+=`<h2>${m}</h2>`;

})
const agregartodo =()=>{
    let datos = document.querySelectorAll("input")
    let hacer = {
        nombre: datos[0].value,
        qhacer: datos[1].value,
        ffin: datos[2].value
    }
    todo.push(hacer)
    mostrartodo()
}
const crearForm=()=>{
    elemento.innerHTML=`"<form class=col-6">
    <div class="mb-3">
      <label for="nombre" class="form-label">Propietario</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="mb-3">
      <label for="qhacer" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="qhacer">
    </div>
    <div class="mb-3">
      <label for="ffin" class="form-label">Especie</label>
      <input type="text" class="form-control" id="ffin">
    </div>
    <button type="button" id="btn" class="btn btn-primary">Agregar To do</button>
    </form>
    `;
    document.getElementById("btn").addEventListener('click',agregartodo)
}    
crearForm();


let mostrartodo = ()=>{

}