//function* perguntas(){
//    const nome = yield 'Qual seu nome'
//    const esporte = yield 'Qual seu esporte favorito?'
//    return "Seu nome é " + nome + ", seu esporte favorito é " +  esporte
//}
 
//const itc = perguntas()
//console.log(itc.next().value)
//console.log(itc.next('Bruno').value)
//console.log(itc.next('Natação').value)

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)