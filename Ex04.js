var i, numero_1 = 0, numero_2 = 0, numero_atual = 0

i = parseInt(prompt("Digite atÃ© que elemento contar"))

for (var contador = 1; contador <= i; contador++) {
    if (contador == 1) {
        numero_atual = 1
        numero_1 = numero_2
        numero_2 = numero_atual
    } else {
        numero_atual = numero_2 + numero_1
        numero_1 = numero_2
        numero_2 = numero_atual
    }
}

alert(numero_atual)