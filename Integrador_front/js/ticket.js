let seccion = document.getElementById("sec")
//seccion.style.visibility="hidden"

const comprarTickets = () => {
    seccion.innerHTML = `
    <div class="container">
    <div class="row">
      <div class="col col-md-10 offset-md-1 col-lg-8">
        <div class="card group">
          <div class="card">
            <div class="card-body border border-primary">
              <h5 class="card-title text-center">Estudiantes</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center font-weight-bold">80%</p>
              <p class="card-text"><small class="text-muted">presentar documentacion</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body border border-primary">
              <h5 class="card-title text-center">Estudiantes</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center font-weight-bold">80%</p>
              <p class="card-text"><small class="text-muted">presentar documentacion</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body border border-primary">
              <h5 class="card-title text-center">Estudiantes</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center font-weight-bold">80%</p>
              <p class="card-text"><small class="text-muted">presentar documentacion</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-uppercase text-center"></div>
      <small>venta</small>
      <h2>Valor de ticket $200</h2>
    </div>
    <div class="row">
      <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2"></div>
      <form>
        <div class="form-row">
          <div class="d-flex">
            <div class="form-group col-6 col-md-6">
              <input type="text" class="form-control" placeholder="Nombre">
            </div>
            <div class="form-group col-6 col-md-6">
              <input type="text" class="form-control" placeholder="Apellido">
            </div>
          </div>

          <div class="form-group col-12 col-md-6">
            <input type="email" class="form-control" placeholder="Correo">
          </div>
          <div class="d-flex">
            <div class="form-group col-12 col-md-6">
              <label for="">Cantidad</label>
              <input id="cantidadentrada" type="text" class="form-control" placeholder="Cantidad">
            </div>

            <div class="form-group col-12 col-md-6">
              <label for="">Categoria</label>
              <select class="form-select" id="inputState">
                <option value="estudiante" selected>Estudiante</option>
                <option value="trainee">Trainee</option>
                <option value="junior">Junior</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col">
            <div id="totalcompra" class="alert alert-primary" role="alert">
              Total a pagar: $
            </div>
          </div>
        </div>
        <div class="form-row d-flex">
          <div class="form-group col">
            <button type="reset" class="btn btn-codo btn-block">Borrar</button>
          </div>
          <div class="form-group col">
            <button type="button" id="botoncalcu" class="btn btn-codo btn-block">Resumen</button>
          </div>
        </div>
      </form>
    </div>

  </div>
    `
}