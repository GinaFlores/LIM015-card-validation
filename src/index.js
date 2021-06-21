import validator from './validator.js';

// Validar solo numeros sin letras y caracteres//

const inputNumeros = document.getElementById("CardNumber");
// Agarrar el elemento del DOM y se le da ese evento al que va estar validado
inputNumeros.addEventListener('keypress', (event) => { // Funcion como parametro
    event.preventDefault();// Previene la accion por defecto del navegador
    let codigoKey = event.keyCode // Codigo de tecla que obtiene el event
    let valorKey = String.fromCharCode(codigoKey) // Compresion del codigo del evento para entender
    //console.log(valorKey)

    let valor =  parseInt(valorKey) // Dara valor si es numero y no dara nada si es letra u otro caracter
    //console.log(valor)

    if (valor || valor === 0) { // Muestra tambien el numero 0 "cero"
        inputNumeros.value += valor // Concatena si el valor del numero es parcial
    }
})

//Obtener los datos del input//
const inputButton = document.getElementById("btn");
inputButton.addEventListener("click", () => {
    // Obtener el dato del nombre
    const userName = document.getElementById("UserName").value;
    // Expresion regular solo letras
    let letras = /^[A-Z][a-z]+/

    //Obtener el dato del numero de tarjeta
    const cardNumber = document.getElementById("CardNumber");
    let datoNumero = cardNumber.value;
    validator.isValid(datoNumero);

    // Declarar para mostrar ultimos 4 digitos en el validator
    const mostrarUltimo = document.getElementById("CardNumber")
    let ultimoDigito = mostrarUltimo.value;
    validator.maskify(ultimoDigito)

    if ((datoNumero.length < 12 || datoNumero.length > 19) && datoNumero.length != 0) {
        alert("El número de tarjeta debe de ser entre 12 a 19 dígitos");
        // Limpiar datos del input
        document.getElementById('CardNumber').value = "";
        document.getElementById('UserName').value = "";
    }
    // Si los datos no estan completos no se podra validar
    if ((datoNumero == "") || (userName == "")) {
        alert("Los campos son obligatorios");
        // Limpiar datos del input
        document.getElementById('CardNumber').value = "";
        document.getElementById('UserName').value = "";
        return false;
    }
    // Permitit solo letras en el campo del nombre
    else if (!letras.test(userName)) {
        alert("El nombre debe ser solo letras");
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
            // Se mostrara mensaje valido
            document.getElementById('mensaje-valido').innerText = "La tarjeta " + validator.maskify(ultimoDigito) + " es válida." + " Puedes pagar o hacer transferencia.";
            document.getElementById('show-valid').style.display = 'block';
            // Ocultara el footer
            document.getElementById('footer').style.display = 'none';
            document.getElementById('boton-retornar-one').style.display = 'block';
        } else {
            // Se mostrara mensaje invalido
            document.getElementById('mensaje-invalido').innerText = "La tarjeta es inválida."+ " Ingrese número válido.";
            document.getElementById('show-invalid').style.display = 'block';
            // Ocultara el footer
            document.getElementById('footer').style.display = 'none';
            document.getElementById('boton-retornar-two').style.display = 'block';
        }
    })
})

