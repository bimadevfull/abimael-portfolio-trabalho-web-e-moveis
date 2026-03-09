// menu mobile

const toggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

toggle.addEventListener("click", () => {

menu.classList.toggle("active")

})


// dark light mode

const theme = document.getElementById("theme-toggle")

theme.addEventListener("click", () => {

document.body.classList.toggle("light")

})


// validação do formulário

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let msg = document.getElementById("mensagem").value

if(nome === "" || email === "" || msg === ""){

alert("Preencha todos os campos")

return

}

let validar = /\S+@\S+\.\S+/

if(!validar.test(email)){

alert("Email inválido")

return

}

alert("Mensagem enviada com sucesso!")

this.reset()

})