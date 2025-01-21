const c1 = document.getElementById("c1")
const cursos = [...document.getElementsByTagName("div")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        if(el.classList.contains("destaque")){
            el.classList.remove("destaque")
        }else{
            el.classList.add("destaque")
        }
    })
})

c1.addEventListener("click", (evt) =>{
    const el = evt.target
    el.classList.add("destaque")
})

