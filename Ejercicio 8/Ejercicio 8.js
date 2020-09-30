let edad = parseInt(window.prompt("¿Que edad tienes?"))
if (edad >= 18) {
    let carnet = window.prompt("¿Tienes carnet de conducir?")
    if (carnet == "si" || carnet == "Si") {
        let nombre = window.prompt("¿Cual es tu nombre?")
        let apellido = window.prompt("¿Cual es tu apellido?")
        let ciudad = window.prompt("¿En qué ciudad recogeras el vehículo?")
        let dias = window.prompt("¿Cuántos días lo vas a alquilar?")
        if (dias < "7") {
            document.getElementById("div1").innerHTML = `<p>Nombre: ${nombre}.</p>
            <p>Apellido: ${apellido}.</p>
            <p>Edad: ${edad} años.</p>
            <p>Ciudad de recogida: ${ciudad}.</p>
            <p>Coste: ${dias * 25} €.</p>`
        }
        else {
            let semana = parseInt(dias / 7)
            let resto = dias % 7
            let total = (semana * 150) + (resto * 25)
            document.getElementById("div1").innerHTML = `Nombre: ${nombre}.\nApellido: ${apellido}.\nEdad: ${edad} años.\nCiudad de recogida: ${ciudad}.\nCoste: ${total} €.`
        }
    }
    else {
        document.getElementById("div1").innerHTML = "Lo siento, no puedes alquilar un coche."
    }
}
else {
    document.getElementById("div1").innerHTML = "Lo siento, no puedes alquilar un coche."
}