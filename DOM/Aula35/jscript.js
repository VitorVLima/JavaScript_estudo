const cursos = [...document.querySelectorAll(".curso")]
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btn_copiar")

console.log(btn)

cursos.map((el)=>{
    el.addEventListener("click",()=>{
        // const el = evt.target
        el.classList.toggle("destaque")

    })
})

// btn.addEventListener("click",()=>{
//     const cursosSelecionados = [...document.getElementsByClassName("destaque")]
    
//     cursosSelecionados.map((el)=>{
//         caixa2.appendChild(el)})

    
// })

btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.getElementsByClassName("destaque")]

    cursosSelecionados.map((el) => {
        // Verifica se o curso está na caixa2
        if (caixa2.contains(el)) {
            // Se estiver em caixa2, então move de volta para caixa1
            caixa1.appendChild(el)
            el.classList.remove("destaque")
        } else {
            // Caso contrário, move para caixa2
            caixa2.appendChild(el)
            el.classList.remove("destaque")
        }
    })
})


