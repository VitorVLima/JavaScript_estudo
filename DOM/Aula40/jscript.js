const caixa1 = document.querySelector("#caixa1")
const c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "PHP", "Javascrip", "CSS", "React", "MySQL"]
const novoElement =document.createElement("div")

caixa1.appendChild(novoElement)
novoElement.innerHTML= "Novo elemento"
novoElement.setAttribute("class","curso")
novoElement.setAttribute("id", "c7")

cursos.map((el,chave)=>{
    const novoelemento= document.createElement("div")
    caixa1.appendChild(novoelemento)
    novoelemento.innerHTML = el
    novoelemento.setAttribute("class", "curso")
    novoelemento.setAttribute("id", "c"+chave)
})

