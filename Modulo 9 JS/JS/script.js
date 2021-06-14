document.body.onload = () => {
    let principal = document.querySelector('.principal');
    principal.innerHTML = `
  <div class = 'container'>
  <form class = col-4>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="clave" class="form-label">Password</label>
    <input type="password" class="form-control" id="clave">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
  <div>
  `;

    document.querySelector('button').addEventListener('click', (ev) => {
        ev.preventDefault();
        let email = document.getElementById('email').value;
        let clave = document.getElementById('clave').value;
        let us = validarUsuario(email, clave, usuarios);
        if (us) {
            principal.innerHTML = `
            <div class = 'container'>
            <select class="form-select" aria-label="Default select example">
            <option selected>Operaciones Clientes</option>
            <option value="crear">Crear</option>
            <option value="actualizar">Actualizar</option>
            <option value="borrar">Borrar</option>
            </select>
            </div>
            `;
            let sel = document.querySelector('select');
            sel.addEventListener('change',operacion);
        }
    });



}

const usuarios = [{
    email: 'jjoseruggeri@gmail.com',
    clave: 'holamundo'
}]
const clientes = [
  
]
function validarUsuario(email, clave, usuarios) {
    for (let a = 0; a < usuarios.length; a++) {
        if (usuarios[a].email == email && usuarios[a].clave == clave) {
            return true;
        } else {
            return false
        }
    }


}

function operacion(event){
   
    if(valor == 'crear'){
        principal.innerHTML = `
        <div class = 'container'>
        <form class = col-4>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="direccion">
        </div>
        
        <button type="submit" class="btn btn-primary">Crear Usuario</button>
      </form>
        </div>
        `;
    }
}