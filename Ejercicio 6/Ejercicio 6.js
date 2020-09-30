let opcion = window.prompt(`¿Qué operacion quieres realizar?
(Suma, resta, multiplicación o división)`).toLowerCase()

let resultado
let texto = opcion.toUpperCase()
document.getElementById("boton").innerHTML = texto
let num1 = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))
function operacion() {
    if (opcion == "suma") {
        resultado = num1 + num2
    }
    else if (opcion == "resta") {
        resultado = num1 - num2
    }
    else if (opcion == "multiplicación") {
        resultado = num1 * num2
    }
    else if (opcion == "división") {
        resultado = num1 / num2
    }
    window.alert(`El resultado es ${resultado}`)
}
console.log("hola" + texto + "hola")