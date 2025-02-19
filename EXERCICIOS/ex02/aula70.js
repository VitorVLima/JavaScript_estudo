const numeros = document.querySelectorAll(".num")
const op = document.querySelectorAll(".op")
const btnRes = document.getElementById("tigual")
const resultado = document.getElementById("display")
const ton = document.getElementById("ton")
const tlimpar = document.getElementById("tlimpar")
const cpy = document.getElementById("cpy")
const teste = document.getElementById("teste")
const calc_aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")
let sinal = false
let decimal = false


numeros.forEach(element => {
    element.addEventListener("click",()=>{
        sinal = false
        if(element.innerHTML == "."){
            if(!decimal){
                decimal = true
                if(resultado.innerHTML == "0"){
                    resultado.innerHTML = "0" + element.innerHTML
                }else{
                    resultado.innerHTML += element.textContent
                }
            }
        }else{
            if(resultado.innerHTML == "0"){
                resultado.innerHTML = ""
            }
            resultado.innerHTML += element.textContent
        }
    })
})

op.forEach(eOp => {
    eOp.addEventListener("click", ()=>{
        decimal = false
    if(!sinal){
        sinal = true
        if(resultado.innerHTML == "0"){
            resultado.innerHTML = ""
        }
        if(eOp.textContent == "x"){
            resultado.innerHTML += "*"
        }else{
            resultado.innerHTML += eOp.textContent
        }
    }
     
    })
})

tlimpar.addEventListener("click",()=>{
    resultado.innerHTML = "0"
    sinal = false
    decimal = false
})

btnRes.addEventListener("click",()=>{
    sinal = false
    decimal = false
    const res = eval(resultado.innerHTML)
    resultado.innerHTML = res

})

tcpy.addEventListener("click", (evt)=>{
    //copia item selecionado
    teste.select()
    teste.setSelectionRange(0,99999) //previni problemas no mobille
    navigator.clipboard.writeText(teste.value)
})

calc_aba.addEventListener("click",()=>{
    calc.classList.toggle("hidden")
})




