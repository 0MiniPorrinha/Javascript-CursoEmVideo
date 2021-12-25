function calcular(){

    let num = document.getElementById('txtnum').value
    let tab = document.getElementById("seltab")
    let min = document.getElementById('txtmin').value
    let max = document.getElementById('txtmax').value
    
    if (num.length == 0 || min.length == 0 || max.length == 0){
        
        window.alert("[ERROR] Algum campo esta em branco")

    }else{
        let n = Number(num)
        let nMin = Number(min)
        let nMax = Number(max)

        tab.innerHTML = "<option>Digite um valor</option>"
        for (let i = nMin; i <= nMax; i++){

            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }

    
    
}

function limpa(){

    let tab = document.getElementById('seltab')

    tab.innerHTML = "<option>Digite um valor</option>"
    
}