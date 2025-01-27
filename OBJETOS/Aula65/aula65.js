const pessoa ={
    nome: "Bruno",
    canal:"CFB Cursos",
    curso: "Javaascript",
    aula:{
        aula1: "Introdução",
        aula2: "Variaveis",
        aula3: "Condicional"   
    }
}


const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"Javaascript","aula":{"aula1":"Introdução","aula2":"Variaveis","aula3":"Condicional"}}'
const s_json = JSON.stringify(pessoa)
const o_json = JSON.parse(string_pessoa)
console.log(pessoa)
console.log(s_json)
console.log(string_pessoa)
console.log(o_json)