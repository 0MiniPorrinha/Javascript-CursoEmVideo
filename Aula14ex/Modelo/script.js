function inVetor(n, v){

    if(v.includes(n)){
        return true
    }
    return false
}

let vetor = []

function add(){

    let num = Number(document.getElementById('txtnum').value)
    let tab = document.getElementById('seltab')
    let verificacao = inVetor(num, vetor)

    if (num < 1 || num > 100){
        alert('Numero invalido')

    }else{
        if(verificacao){
            alert('Numero já adicionado')
        }else{
            vetor.push(num)
            let item = document.createElement('option')
            item.text = `O valor adicionado foi ${vetor.slice(-1)}`
            tab.appendChild(item)
        }
    }
    //alert(vetor)
}

function finalizar(v= vetor){

    let res = document.getElementById('res')

    res.innerHTML = `Ao todo temos ${v.length} numeros cadastrados <br>`

    v.sort()
    res.innerHTML += `O maior valor informado foi ${v.slice(-1)} <br>`
    res.innerHTML += `O menor valor informado foi ${v[0]} <br>`

    let soma = 0
    for (let i in v){

        soma += v[i]
    }
    res.innerHTML += `Somando todos os valores, temos ${soma}`

    media = soma / v.length
    res.innerHTML += `A média dos valores digitados é ${media}`
}