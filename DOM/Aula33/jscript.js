const divTodas = [...document.getElementsByTagName("div")]
const cursos = [...document.getElementsByClassName("curso")]
const cursosc10 = [...document.getElementsByClassName("c10")]
const cursosc20 = [...document.getElementsByClassName("c20")]

const query_divTodas = [...document.querySelectorAll("div")]
const query_cursosTodas = [...document.querySelectorAll(".curso")]
const qcursosc10 = [...document.querySelectorAll(".c10")]
const qcursosc20 = [...document.querySelectorAll(".c20")]

console.log(query_divTodas)
console.log(query_cursosTodas)
console.log(qcursosc10)
console.log(qcursosc20)

// console.log(divTodas)
// console.log(cursos)
// console.log(cursosc10)
// console.log(cursosc20)

// cursos.map((el,i)=>{
//     if(i%2==0)
//     el.classList.add("destaque")
// })