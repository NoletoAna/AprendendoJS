function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('width','450px')
        img.setAttribute('id', 'foto')
        img.style.marginTop ='15px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebeMenino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemMenino.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebeMenina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemMenina.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        // para aparecer a imagem
        res.appendChild(img)
    }
}
