const caixa = document.getElementById("caixa")

const curso = "Javascript"
const canal = "CFB Cursos"
// const frase = "Este é o curso de " + curso + " do canal " + canal + " teste"
const frase = `Este é o <br\> curso de  <h1>${curso} do canal ${canal}<h1/>`

caixa.innerHTML = frase