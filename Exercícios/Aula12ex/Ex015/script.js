function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
    window.alert('ERRO verifique os dados e tente novamente')} else {
        var fsex = document.getElementsByName('gen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = ""
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/masc/bebe.png')
                genero = 'criança'
            } else if (idade < 21){
                img.setAttribute('src','imagens/masc/jovem.png')
                genero = 'jovem'
            }else if (idade < 50) {
                img.setAttribute('src','imagens/masc/adulto.png')
                genero = 'adulto'
            } else {
                img.setAttribute('src','imagens/masc/idoso.png')
                genero = 'idoso'
            }


        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/femi/bebe.png')
            } else if (idade < 21){
                img.setAttribute('src','imagens/femi/jovem.png')
            }else if (idade < 50) {
                img.setAttribute('src','imagens/femi/adulta.png')
            } else {
                img.setAttribute('src','imagens/femi/idosa.png')              
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '10px'

    }
}