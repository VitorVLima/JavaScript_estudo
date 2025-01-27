const Pessoa = {
    nome: "Bruno",
    getNome:function(){
        return this.nome
    }
    setNome:function(nome){
        this.nome = nome
    }
}

const p1 = Pessoa

p1.nome = "Vitor"
p1["nome"] = "Rafael"
Pessoa.setNome("Luis")

console.log(p1.nome)