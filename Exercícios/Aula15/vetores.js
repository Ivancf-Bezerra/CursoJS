let num = [8,1,7,4,2,9]
/*console.log(num)
for(let i = 0;i < num.length;i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}*/

for(let pos in num){
    console.log(num[pos])
}

let pos = num.indexOf(4)
console.log(`posição ${pos}`)