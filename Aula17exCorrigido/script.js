let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){

    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, vetor){
    if(vetor.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} selecionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''  //Limpa o camppo
    num.focus()     //Seleciona o campo
}

function limpar(){
    
    let tab = document.getElementById('seltab')
    tab.innerHTML = "<option></option>"

    valores = []
    res.innerHTML = ''
}

function finalizar(){

    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){

            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os calores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}



/*function inVetor(n, v){

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
    res.innerHTML += `Somando todos os valores, temos ${soma}<br>`

    media = soma / v.length
    res.innerHTML += `A média dos valores digitados é ${media}<br>`
}*/