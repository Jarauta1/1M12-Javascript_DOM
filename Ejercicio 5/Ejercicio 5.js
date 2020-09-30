let num1 = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let div5 = document.getElementById("div5")

div1.style.backgroundColor = "blue"
div1.style.color = "white"
div1.innerHTML = `${num1} + ${num2} = ${num1 + num2}`
div2.style.backgroundColor = "red"
div2.style.color = "black"
div2.innerHTML = `${num1} - ${num2} = ${num1 - num2}`
div3.style.backgroundColor = "yellow"
div3.style.color = "browm"
div3.innerHTML = `${num1} * ${num2} = ${num1 * num2}`
div4.style.backgroundColor = "silver"
div4.style.color = "blue"
div4.innerHTML = `${num1} / ${num2} = ${num1 / num2}`
div5.style.backgroundColor = "gold"
div5.style.color = "red"
div5.innerHTML = `${num1} % ${num2} = ${num1 % num2}`