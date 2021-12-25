var agora = new Date()
var hora = agora.getHours()

console.log(`${agora}`)
console.log(`Agora são ${hora} horas`)

if (hora <= 24){
    if (hora < 6){
        console.log('Boa madrigada')
    } else if (hora < 12){
        console.log('Bom dia')
    } else if( hora <= 18){
        console.log('Boa tarde')
    } else{
        console.log('Boa noite')
    }
} else {
    console.log('Hora invalida')
}