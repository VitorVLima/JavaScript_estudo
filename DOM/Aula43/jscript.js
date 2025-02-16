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

adicionarCurso = (curso) =>{

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    indice++

    return novoElemento
}


cursos.map((el)=>{
    
    const novoElemento = adicionarCurso(el)
    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
     const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
    alert("curso selecionado: " + cursoSelecionado)
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
     const cursoSelecionado = rs.parentNode.parentNode
     cursoSelecionado.remove()

})

btnAdicionarAntes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
    if(novoCurso.value == ""){
        alert("por favor, insira o nome do curso")
    }
    const cursoSelecionado = rs.parentNode.parentNode
    const nCurso = adicionarCurso(novoCurso.value)
    caixaCursos.insertBefore(nCurso,cursoSelecionado)
   
})


btnAdicionarDepois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if(rs == undefined){
        alert("nenhum curso foi selecionado")
    }
    if(novoCurso.value == ""){
        alert("por favor, insira o nome do curso")
    }
    const cursoSelecionado = rs.parentNode.parentNode
    const nCurso = adicionarCurso(novoCurso.value)
    caixaCursos.insertBefore(nCurso,cursoSelecionado.nextSibling)

})

