const numero = document.getElementById("numero")
const btn = document.getElementById("btn_ptomessa")

btn.addEventListener("click",(eve)=>{
    numero.innerHTML="Processando"
    let promise = new Promise((resolve,reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
           if(resultado){
               resolve("Deu tudo certo")
           }else{
               reject("Deu tudo errado")
           }
       },tempo)
       })
       
       promise.then((retorno)=>{
           numero.innerHTML = retorno
           numero.classList.remove("erro")
           numero.classList.add("ok")
       })
       
       promise.catch((retorno)=>{
           numero.innerHTML = retorno
           numero.classList.remove("ok")
           numero.classList.add("erro")
       })
})

numero.innerHTMLt= "Esperando"