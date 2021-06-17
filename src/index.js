import validator from './validator.js';

// Validar solo numeros sin letras y caracteres//
const validarNumeros = document.getElementById("CardNumber");
validarNumeros.addEventListener('keypress', (event) => {
    event.preventDefault();
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    //console.log(valorKey)

    let valor =  parseInt(valorKey)
    //console.log(valor)validator.isValid(datoNumero)

    if (valor || valor === 0) {
        validarNumeros.value += valor
    }
})

//Obtener los datos del input//
const validatorButton = document.getElementById("btn");
validatorButton.addEventListener("click", () => {
    // Obtener dato del nombre
    const userName = document.getElementById("UserName").value;
    //Obtener el dato del numero de tarjeta
    const cardNumber = document.getElementById("CardNumber");
    let datoNumero = cardNumber.value;
    validator.isValid(datoNumero);

    // Declarar para mostrar ultimos 4 digitos
    const mostrarUltimo = document.getElementById("CardNumber")
    let ultimoDigito = mostrarUltimo.value;
    validator.maskify(ultimoDigito)

    if ((datoNumero.length < 12 || datoNumero.length > 19) && datoNumero.length != 0) {
        alert("El número de tarjeta tiene que ser mayor a 12 y menor a 19 dígitos");
        document.getElementById('CardNumber').value = "";
        document.getElementById('UserName').value = "";
    }
    if ((datoNumero == "") || (userName == "")) {
        alert("Los campos no deben de estar vacios");
        document.getElementById('CardNumber').value = "";
        document.getElementById('UserName').value = "";
        return false;
    }
    // Ocultar formulario
    const ocultar = document.getElementById("btn");
    ocultar.addEventListener("click", () => {
        document.getElementById('hide-form').style.display = 'none';
    })
    // Mostar si la tarjeta es valida e invalida
    const botonValidar = document.getElementById("btn");
    botonValidar.addEventListener("click", () => {
        if (validator.isValid(datoNumero)){
            document.getElementById('show-valid').innerText = "La tarjeta " + validator.maskify(ultimoDigito) + " es válida." + " Puedes pagar o hacer transferencia.";
            document.getElementById('show-valid').style.display = 'block';
            document.getElementById('footer').style.display = 'none';
        } else {
            document.getElementById('show-invalid').innerText = "La tarjeta es inválida."+ " Ingrese número válido.";
            document.getElementById('show-invalid').style.display = 'block';
            document.getElementById('footer').style.display = 'none';
            document.getElementById('')
        }
    })
})

