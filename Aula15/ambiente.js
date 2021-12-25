let num = [5, 8, 2, 9, 3]

num[5] = 6

//adiciona no final
num.push(1)

//ordem crescente
num.sort()

for (let i = 0; i < num.length; i++){

    console.log(num[i])
}

let pos = num.indexOf(15)

if(pos == -1){

    console.log('Valor não encontrado')
}else{
    console.log(`posição: ${pos}`)
}


