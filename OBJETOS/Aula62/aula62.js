class Carro{ //Classe pai
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado=true
    }

    desligado = function(){
        this.ligado=false
    }

    setCor= function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }
    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1 = new Carro("Normal",4)
c1.ligar()
c1.setCor = "Azul"

const c2 = new Militar("Lutador",1,100,50)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Cor: ${c1.cor}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`-----------------------`)

c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`-----------------------`)

