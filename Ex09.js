var numero = parseFloat(prompt("Digite um número"))
var i = 0

if (numero % 3 == 0) {
    alert("é múltiplo de 3")
    i++
}
if (numero % 7 == 0) {
    alert("é múltiplo de 7")
    i++
}
if (i == 0) {
    alert("Não é múltiplo de 3 e nem de 7")
}