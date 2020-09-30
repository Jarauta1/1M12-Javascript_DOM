let div1 = document.getElementById("div1")
let nombre = window.prompt("¿Cómo te llamas?")
let edad = parseInt(window.prompt(`${nombre}, ¿Que años tienes?`))
if (edad < 18) {
    div1.style.color = `red`
    div1.innerHTML = `<h1>Hola ${nombre}, eres menor de edad.</h1>`
}
else {
    div1.style.color = `green`
    div1.innerHTML = `<h1>Hola ${nombre}, eres mayor de edad</h1>`
}

let div2 = document.getElementById("div2")
switch (edad < 18) {
    case true:
        div2.style.color = `red`
        div2.innerHTML = `<h1>Hola ${nombre}, eres menor de edad.</h1>`
        break;
    case false:
        div2.style.color = `green`
        div2.innerHTML = `<h1>Hola ${nombre}, eres mayor de edad</h1>`
        break;
}

let div3 = document.getElementById("div3")
edad < 18 ? (div3.style.color = `red` , div3.innerHTML = `<h1>Hola ${nombre}, eres menor de edad.</h1>` ): (div3.style.color = `green`,div3.innerHTML = `<h1>Hola ${nombre}, eres mayor de edad</h1>`)
