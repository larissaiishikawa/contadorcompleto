let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { return false}
}

function add() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() // para limpar e voltar para a caixinha
}

function finalizar() {
    if (valores.length ==0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            //soma
            soma += valores[pos]
            //maior e menor
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        //media
        media = soma/tot
        Math.round(media)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números contabilizados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma total dos números é ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é ${media}.</p>`
    }
}