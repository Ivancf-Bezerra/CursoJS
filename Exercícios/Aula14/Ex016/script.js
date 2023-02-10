function contador(){
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pass = document.getElementById('pass')
var c = 1
var res = document.getElementById('res')
if (ini.value <= 0) {
    window.alert('Inicio invalido')
}
    while (c <= fim.value){
    res.innerHTML = `<p>${c.value} emojiaqui</p>` 
}
}
