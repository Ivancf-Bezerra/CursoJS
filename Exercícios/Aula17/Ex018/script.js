let numero = document.getElementById('numero')
let lista = document.getElementById('resultado')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()

}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Sem valores')
    } else {
        let soma = 0
        let media = 0
        let tot = valores.length
        let menor = valores[0]
        let maior = valores [0]
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += ` <p> O maior valor é ${maior} e o menor é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }


}