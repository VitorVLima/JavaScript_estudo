const caixa1 = document.querySelector("#caixa1")
const c = [...document.querySelectorAll(".curso")]

console.log(c[0].hasChildNodes())

// if(c[0].children.length > 0){
//     console.log("possui filhos")
// }else{
//     console.log("nao possui filhos")
// }

console.log(c[0].children.length > 0 ? "Possui Filhos " : "Não possui filhos")
