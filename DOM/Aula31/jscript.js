const divs = document.getElementsByTagName("div")
divs1 = [...divs]

console.log(divs1)

divs1.map((e)=>{
    e.innerHTML= "VITOR"
})