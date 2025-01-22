const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let aux=[]

p_array.innerHTML = "["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML = elementos_array.reduce((anterior,atual,pos)=>{
        aux.push(anterior)
        return anterior + atual
    })
    resultado.innerHTML += "<br/>" + aux
})
