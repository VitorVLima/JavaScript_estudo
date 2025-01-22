const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["html","css","javascript","PHP","React","Python"]

p_array.innerHTML = "["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    const ret =elementos_array.find((el,i)=>{
        if(el.toUpperCase() == txt_pesquisar.value.toUpperCase().trim()){
            resultado.innerHTML="o curso de " + el + " foi encontrado na posição " + i
            return el
        }
    })

    if(ret==undefined){
        resultado.innerHTML="Nenhum curso foi encontrado no nosso banco de dados"
    }

})

