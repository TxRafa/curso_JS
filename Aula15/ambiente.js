let num = [7, 6, 2, 3, 9]
num.push(8)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log (`O valor informado nao foi encontrado`)
} else {
    console.log (`O valor está na posição ${pos}`)
}

/* 
let valores = [7, 6, 2, 3, 9]
valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/




/*let valores = [7, 6, 2, 3, 9]]
for(let pos=0; pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
*/





/*
let num = [7, 6, 2, 3, 9]
num.sort()
num.push(8)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[2]}`)
*/
