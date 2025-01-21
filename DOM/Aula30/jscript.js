const div1 = document.getElementById("c1")
const div2 = document.getElementById("c2")
const div3 = document.getElementById("c3")
const div4 = document.getElementById("c4")
const div5 = document.getElementById("c5")
const div6 = document.getElementById("c6")

const vetor1 = [div1, div2, div3, div4, div5, div6]


console.log(div1)
console.log(div1.id)
console.log(div1.innerHTML)

// for(v of vetor1){
//     v.innerHTML = "chuá"
// }

vetor1.map((e) =>{
    e.innerHTML = " vitor"
})
    
