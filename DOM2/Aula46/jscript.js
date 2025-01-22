const caixaCursos = document.querySelector("#caixaCursos")
const btn_c =[...document.querySelectorAll("curso")]
const c1_2= document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript","PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarAntes = document.getElementById("btnAdicionarAntes")
const btnAdicionarDepois = document.getElementById("btnAdicionarDepois")
const novoCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecionado = ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

adicionarCurso = (curso) =>{

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecionado()
        evt.target.classList.toggle("selecionado")
    })
    
    indice++

    return novoElemento
}


cursos.map((el)=>{
    
    const novoElemento = adicionarCurso(el)
    caixaCursos.appendChild(novoElemento)
})

const caixaSelecionado=()=>{
    const elementoSelecionado = [...document.querySelectorAll(".selecionado")]
    return elementoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs = caixaSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
     const cursoSelecionado = rs.textContent
    alert("curso selecionado: " + cursoSelecionado)
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = caixaSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
     rs.remove()

})

btnAdicionarAntes.addEventListener("click", (evt)=>{
    const rs = caixaSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
    if(novoCurso.value == ""){
        alert("por favor, insira o nome do curso")
    }
    const cursoSelecionado = rs
    const nCurso = adicionarCurso(novoCurso.value)
    caixaCursos.insertBefore(nCurso,cursoSelecionado)
   
})


btnAdicionarDepois.addEventListener("click", (evt)=>{
    const rs = caixaSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
    if(novoCurso.value == ""){
        alert("por favor, insira o nome do curso")
    }
    const cursoSelecionado = rs
    const nCurso = adicionarCurso(novoCurso.value)
    caixaCursos.insertBefore(nCurso,cursoSelecionado.nextSibling)

})