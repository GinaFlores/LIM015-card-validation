const validator = {
    isValid: function(creditCardNumber) {
        //Algoritmo de luhn
        // Construye una matriz con los dígitos del número de la tarjeta
        const convertado = creditCardNumber.split('').reverse(); // Se divide en un array y en orden inverso
        for (let i = 0; i < convertado.length; i++) { // Se van a iterar caracter numerico por caracter
            convertado[i] = parseInt (convertado [i], 10); // Pasa de string a number
        }
        let sum = 0;
        let esPar = convertado.length % 2 === 0;
        for(let i = convertado.length - 1; i >= 0; i--) {
            if (esPar) {
                convertado [i] *= 2;
                if (convertado [i] >= 10) {
                    convertado [i] -= 9;
                }
            }
            sum += convertado [i];
            esPar =! esPar;
        }
        // Verifica el resultado
        if (sum % 10 === 0) {
            return true
            //console.log("valido");
        } else {
            return false
            //console.log("invalido");
        }
    },
    maskify: function(convertado) {
        let countNum = '';

        for(let i = 0; i< convertado.length; i++) {
            if (i <= convertado.length - 5) {
                countNum = countNum + '#'
            } else {
                countNum = countNum + convertado[i];
            }
        }
        return countNum;
    }
};

export default validator;
