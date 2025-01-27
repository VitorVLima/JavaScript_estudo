class Normal{
    constructor(cnome,cportas){
        this.nome = cnome
        this.portas = cportas
    }
}

class Militar extends Normal{
    constructor(cnome,cportas,cblindagem,cmunicao){
        super(cnome,cportas)
        this.blindagem = cblindagem
        this.municao = cmunicao
    }
}

let carros = []
const btnAdicionar = document.getElementById("btn_addCarro")
const radios = [...document.querySelectorAll("input[type=radio]")]

const nome = document.getElementById("f_nome")
const portas = document.getElementById("f_portas")
const blindagem = document.getElementById("f_blindagem")
const municao = document.getElementById("f_municao")
const Resultado = document.getElementById("carros")

radios[0].addEventListener("click",(evt)=>{
    blindagem.value = 0
    municao.value = 0
    nome.value = ""
    portas.value = 0
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

radios[1].addEventListener("click",(evt)=>{
    nome.value = ""
    portas.value = 0
    blindagem.setAttribute("disabled","disabled")
    municao.setAttribute("disabled","disabled")

})

const gerenciarExibicao=()=>{
    Resultado.innerHTML=""
    carros.forEach((c)=>{
        const btn = document.createElement("button")
        const div = document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML = `Tipo de Veículo: ${c.constructor.name} <br/> Nome: ${c.nome} <br/> Numero de Portas ${c.portas}`
        if(c.constructor.name=="Militar"){
            div.innerHTML+=`<br/> Blindagem: ${c.blindagem} <br/> Munição: ${c.municao}`
        }
        btn.innerHTML="remover"
        Resultado.appendChild(div)
        div.appendChild(btn)
    })
}

btnAdicionar.addEventListener("click",()=>{
    if(radios[1].checked){
        const c1 = new Normal(nome.value,portas.value)
        if(nome.value==""){
            alert("Digite o nome do veiculo")
            return
        }
        carros.push(c1)
    }else{
        const c1 = new Militar(nome.value,portas.value,blindagem.value,municao.value)
        if(nome.value==""){
            alert("Digite o nome do veiculo")
            return
        }
        carros.push(c1)
    }
    gerenciarExibicao()
    blindagem.value = 0
    municao.value = 0
    nome.value = ""
    portas.value = 0
    alert("Veiculo adicionado com sucesso")
})