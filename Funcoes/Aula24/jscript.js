let f = function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(f(10,5,8))

let g = new Function("p1","p2", "return p1 + p2") //função construtor anonima

console.log(g(20,40))