const novoElement =document.createElement("div")
const caixa1 = document.querySelector("#caixa1")
const c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "PHP", "Javascrip", "CSS", "React", "MySQL"]

caixa1.appendChild(novoElement)
novoElement.innerHTML= "Novo elemento"
novoElement.setAttribute("class","curso")
novoElement.setAttribute("id", "c7")

cursos.map((el,chave)=>{
    const novoelemento= document.createElement("div")
    novoelemento.innerHTML = el
    novoelemento.setAttribute("class", "curso")
    novoelemento.setAttribute("id", "c"+chave)
    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","./lixeira.jpg")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoelemento.appendChild(btn_lixeira)


    btn_lixeira.addEventListener("click", (evt)=>{
        console.log(evt.target)
        caixa1.removeChild(novoelemento)
    })
    caixa1.appendChild(novoelemento)
})