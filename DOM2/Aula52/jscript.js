let cursos = [" HTML", "CSS", "Javascript"]
const caixa = document.querySelector("#caixa")
const Cores = ["Azul", "Verde", "Vermelho"]
const pessoa = [1, "Branco", 40]

cursos.push("C++")
cursos.push("Linux")
cursos.unshift("Python")
cursos.push(Cores)
cursos.push(pessoa)
//cursos.shift() => tira no inicio

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

console.log(cursos)