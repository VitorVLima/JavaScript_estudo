function Pessoa(pnome, pidade){
    
    this.nome = pnome,
    this.idade = pidade,

    this.getNome = function(){
        return this.nome
    },
    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function(nome){
        this.nome = nome
    },

    this.setNome = function(idade){
        this.idade = idade
    },

    this.info = function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

let pessoas= []

const botaoAdicionar = document.getElementById("btn_ok")
const res = document.querySelector(".res")
const addPessoa= ()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{
        
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${p.nome}, Idade: ${p.idade}`
        res.appendChild(div)
    })
}

botaoAdicionar.addEventListener("click",(evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p= new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(pessoas)
    addPessoa()
})

