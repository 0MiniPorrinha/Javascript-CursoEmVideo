function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //dia
        img.src = 'manha.png'
        document.body.style.background = '#aeb6d3'
    }else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#eba286'
    }else{
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#032244'
    }
}