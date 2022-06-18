window.onload = function(){

    let buttonSubmit = document.getElementById('button-submit');
    let modal = document.getElementById("myModal");
    let modalContent = document.getElementById("content");
    let span = document.getElementsByClassName("close")[0];
    let nombre = document.getElementById('nombre');
    let nombreError = document.getElementById('nombreError');
    let hombre = document.getElementById('hombre');
    let mujer = document.getElementById('mujer');
    let otro = document.getElementById('otro');
    let sexoError = document.getElementById('sexoError');
    let apellido = document.getElementById('apellido');
    let apellidoError = document.getElementById('apellidoError');
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let edad = document.getElementById('edad');
    let edadError = document.getElementById('edadError');
    let pais = document.getElementById('pais');
    let paisError = document.getElementById('paisError');
    let jugador1 = document.getElementById('jugador1');
    let jugador2 = document.getElementById('jugador2');
    let jugador3 = document.getElementById('jugador3');

    buttonSubmit.addEventListener("click", function () {
        validarApellido()
        validarNombre()
        validarEmail()
        validarEdad()
        validarSexo()
        validarJugador()
        validarPais()
        if( validarApellido() && validarNombre() && validarEmail() && validarEdad() && validarSexo() && validarJugador() && validarPais()){
            fetch(`https://curso-dev-2021.herokuapp.com/newsletter?name=${nombre.value}&apellido=${apellido.value}&email=${email.value}&pais=${pais.value}&edad=${edad.value}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data,modalContent,modal)
                    modal.style.display = "block";
                    modalContent.innerHTML= `Suscripcion enviada con exito! \n ${JSON.stringify(data)}`
                    span.onclick = function() {
                        modal.style.display = "none";
                    }
                })
                .catch(err => console.log('ERROR', err))
        }
    })

}

function validarNombre(){
    if(nombre.value.length < 3){
        nombreError.classList.remove('hiddenError');
        return false
    }else{
        nombreError.classList.add('hiddenError');
    }
    return true
}

function validarApellido(){ 
    if(apellido.value.length < 3){
        apellidoError.classList.remove('hiddenError');
        return false
    }else{
        apellidoError.classList.add('hiddenError');
    }
    return true
}

function validarEmail(){   
    let emailRegex =/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email.value)) {
      emailError.classList.remove('hiddenError');
      return false
    }else{
        emailError.classList.add('hiddenError');
    }
    return true
}

function validarEdad(){
    if (parseInt(edad.value) < 0 || parseInt(edad.value) > 99 || edad.value=='' || !Number.isInteger(parseInt(edad.value))) {
        edadError.classList.remove('hiddenError');
        return false
    }else{
        edadError.classList.add('hiddenError');
    }
    return true
}

function validarPais(){
    if (pais.value =='null') {
        paisError.classList.remove('hiddenError');
      return false
    }else{
        paisError.classList.add('hiddenError');
    }
    return true
}

function validarJugador(){
    let jugadorError = document.getElementById('jugadorError');
    if (!jugador1.checked && !jugador2.checked && !jugador3.checked) {
        jugadorError.classList.remove('hiddenError');
        return false
    }else{
        jugadorError.classList.add('hiddenError');
    }
    return true
}

function validarSexo(){
    if (!hombre.checked && !mujer.checked && !otro.checked) {
        sexoError.classList.remove('hiddenError');
      return false
    }else{
        sexoError.classList.add('hiddenError');
    }
    return true
}
