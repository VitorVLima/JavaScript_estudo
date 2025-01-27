const caixa = document.getElementById("caixa")

let mapa = new Map()

mapa.set("curso","Javascript")
mapa.set(10,"CFB Cursos")
mapa.set(1,100)

console.log(mapa)

let pes = 10
let res = ""

if(mapa.has(pes)){
    res = "A chave existe na coleção com o valor: " + mapa.get(pes)
}else{
    res = "A Chave não existe na coleção"
}

res+= "<br/> O tamanhoda coleção é: " + mapa.size

mapa.forEach((el)=>{
    res+= "<br/> " + el
})
caixa.innerHTML = res