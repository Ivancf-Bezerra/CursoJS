function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var ft = window.document.querySelector('footer')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hrs`
    
    if (hora >= 0 && hora < 12 ){
        //bom dia
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#D9D5C1'

        ft.style.background ='#F2B807'
        
    } else if (hora >= 12 && hora <= 18 ) {
        //boa tarde
               
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#FCBEA5'
        ft.style.background = '#F2E8C9'

    }
    
    else {
        //boa noite
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 
        ft.style.background = '#3C3835'
    }
}