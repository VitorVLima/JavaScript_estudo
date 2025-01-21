function aluno(nome, nota){

    this.nome = nome
    this.nota = nota
    
    this.dados_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

}

const all = new aluno("vitor", 10)
all.dados_arrow()

