// import validator from './validator.js'; //

// Validar solo números sin letras y caractéres//
const validarNumeros = document.getElementById("CardNumber");

    validarNumeros.addEventListener('keypress', (event) => {
    event.preventDefault();
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    //console.log(valorKey)//

    let valor =  parseInt(valorKey)
    //console.log(valor)//

    if (valor || valor === 0) {
        validarNumeros.value += valor
    }
})

//Obtener los datos del input//

