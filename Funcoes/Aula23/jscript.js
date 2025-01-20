function soma(...valores){
    let res = 0
    let tam = valores.length
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(10,5,77))