var numero
var resposta = 5
var i
var mais = 10
var menos = 0

var jogador = prompt("digite seu nome")

for (i = 0; i < 4; i++) {

    numero = prompt(jogador + " digite um numero entre " + menos + " e " + mais)

    if (numero == resposta) {
        alert(jogador + " acertou, o numero resposta é: " + resposta)
        i = 5
    }
    else {
        mais--
        menos++
        alert("errou " + jogador + ", o numero é entre " + menos + " e " + mais)
    }

    if (i == 3) {
        alert("errou todas " + jogador + ", o numero correto é: " + resposta)
    }
}