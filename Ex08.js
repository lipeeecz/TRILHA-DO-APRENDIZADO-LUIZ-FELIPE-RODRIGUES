var resultado = 1

var numero = parseFloat(prompt("Digite um numero"))

for (var i = 1; i <= numero; i++) {
    resultado = i * resultado
}

alert(resultado)