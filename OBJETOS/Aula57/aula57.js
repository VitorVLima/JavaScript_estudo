class Carro{
    constructor(pnome,ptipo){
        this.nome = pnome
        if(ptipo==1){
            this.tipo = "Esportivo"
            this.Velmax = 300
        }else if(ptipo==2){
            this.tipo = "Utilitario"
            this.Velmax = 100
        }else if(ptipo==3){
            this.tipo = "Esportivo"
            this.Velmax = 160
        }else{
            this.tipo = "Militar"
            this.Velmax = 180
        }
    }

    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    getTipo(){
        return this.tipo
    }

    getVelmax(){
        return this.Velmax
    }

    info(){
        console.log(`Nome do veiculo: ${this.nome}`)
        console.log(`Tipo do veiculo: ${this.tipo}`)
        console.log(`Vel max do veiculo: ${this.Velmax}`)
    }
}

let c1 = new Carro("Rapidão",1)
let c2 = new Carro("SuperLuxo",2)
let c3 = new Carro("Bombadão",4)
let c4 = new Carro("Carrego tudo",3)

c1.info()
console.log(c1.getNome())
c1.setNome("Mudei de nome")
c1.info()