// const  cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((el,i) => {
//     
// })

let el = document.getElementsByTagName("div")
el = [...el]
el.map((e,i)=>{
    e.innerHTML = i
    console.log(e)
})
