var media = 0, nota

for (var i = 1; i <= 4; i++) {
    nota = parseFloat(prompt("Digite a nota do aluno"))
    media = media + nota
}

media = media / 4

if (media <= 10 && media >= 9) {
    alert("O aluno tirou A")
}
else if (media <= 8.9 && media >= 8) {
    alert("O aluno tirou B")
}
else if (media <= 7.9 && media >= 7) {
    alert("O aluno tirou C")
}
else if (media <= 6.9 && media >= 0) {
    alert("O aluno tirou D")
}
else {
    alert("ERROR 404")
}