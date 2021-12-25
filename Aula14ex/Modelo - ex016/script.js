function verificar(){   
    let inicio = document.getElementById("txtinicio").value
    let fim = document.getElementById("txtfim").value
    let passo = document.getElementById("txtpasso").value
    let res = document.getElementById("res")

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){

        res.innerHTML = "Impossivel contar"
        
    }else{ 

        res.innerHTML = "Contando: "

        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(p <= 0 || p > f){

            window.alert("Passo inválido! Considerando Passo 1")
            p = 1
        }

        if (inicio < fim){

            //contagem crescente
            for(let c = i; c <= f; c += p){

                res.innerHTML += `${c}  \u{1F449} `
            }
        }else{

            //contagem regressiva
            for(let c = i; c >= f; c -= p){

            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F60E}`
    }
}
