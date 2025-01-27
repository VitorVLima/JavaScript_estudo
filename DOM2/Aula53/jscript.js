const soma = document.getElementById("btn_soma")
const subtracao = document.getElementById("btn_subtracao")
const multiplicacao = document.getElementById("btn_multiplicacao")
const divisao = document.getElementById("btn_divisao")
const res = document.getElementById("res")
const op = [
    ()=>{
        const valor1 = document.getElementById("valor1").value
        const valor2 = document.getElementById("valor2").value  
        res.value = Number(valor1) + Number(valor2)
    },

    ()=>{
        const valor1 = document.getElementById("valor1").value
        const valor2 = document.getElementById("valor2").value  
        res.value = Number(valor1) - Number(valor2)
    },

    ()=>{
        const valor1 = document.getElementById("valor1").value
        const valor2 = document.getElementById("valor2").value  
        res.value = Number(valor1) * Number(valor2)
    },

    ()=>{
        const valor1 = document.getElementById("valor1").value
        const valor2 = document.getElementById("valor2").value  
        res.value = Number(valor1) / Number(valor2)
    }
]

soma.addEventListener("click",op[0])
subtracao.addEventListener("click",op[1])
multiplicacao.addEventListener("click",op[2])
divisao.addEventListener("click",op[3])