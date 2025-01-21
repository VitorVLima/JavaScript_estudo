const cursos = [...document.getElementsByClassName("curso")]
const cursosc10 = [...document.getElementsByClassName("c10")]
const cursosc20 = [...document.getElementsByClassName("c20")]

console.log(cursos)
console.log(cursosc10)
console.log(cursosc20)

cursos.map((el,i)=>{
    if(i%2==0)
    el.classList.add("destaque")
})