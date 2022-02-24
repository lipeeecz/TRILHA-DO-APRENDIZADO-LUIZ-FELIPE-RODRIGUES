var progressao = []

var primeiro = parseFloat(prompt("Digite o primeiro termo"))
var razao = parseFloat(prompt("Digite a razÃ£o"))
var termos = parseInt(prompt("Digite a quantidade de termos"))

progressao[0] = primeiro

for (var i = 1, calculo = 0; i < termos; i++) {
    calculo = progressao[i - 1] * razao
    progressao.push(parseFloat(calculo))
}

alert("Resultado: " + progressao)