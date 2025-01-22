function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = '1.png'
        document.body.style.background = '#F1EEEA'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = '2.png'
        document.body.style.background = '#EEBE76'
    } else {
        // boa noite
        img.src = '3.png'
        document.body.style.background = '#9974A9'
    }
}