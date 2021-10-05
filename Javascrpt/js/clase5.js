/*Arreglos*/
let elemento = document.querySelector("#principal")

let mascotas = [];
mascotas[1] = "loro";
mascotas[0] = "Perro";
//elemento.innerHTML=`<h2>${mascotas}</h2>`;
/*mascotas.push("Gallo");
mascotas.forEach(m => {
    elemento.innerHTML += `<h2>${m}</h2>`;
});*/

//function crearForm(){} // para java solo es usa este//parar react o node
const crearForm = () => {elemento.innerHTML=
    
    `<form class="col-6">

    <div class="mb-3">
      <label for="propietario" class="form-label">propietario</label>
      <input type="text" class="form-control" id="propietario" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="especie" class="form-label">Especie</label>
      <input type="text" class="form-control" id="especie" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="raza" class="form-label">Raza</label>
      <input type="text" class="form-control" id="raza" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="edad" class="form-label">Edad</label>
      <input type="text" class="form-control" id="edad" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="peso" class="form-label">Peso</label>
      <input type="text" class="form-control" id="peso" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="imagen" class="form-label">Imagen</label>
      <input type="text" class="form-control" id="imagen" aria-describedby="emailHelp">
    </div>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    consulta
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Urgencia
  </label>
</div>
    <button id="btn" type="button" class="btn btn-primary">agregar datos</button>
  </form>`;
  document.getElementById("btn").addEventListener('click',agregarMascota)
};
const agregarMascota = () => {
   let datos = document.querySelectorAll('input')
   console.log(datos)
};

crearForm();