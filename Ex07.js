var idade, sexo, verificacao = false
var homem_velho = 0, homem_novo = 101, homem_maior = 0, homem_menor = 0
var mulher_velha = 0, mulher_nova = 101, mulher_maior = 0, mulher_menor = 0

alert("Para a idade só serão aceitos valores numéricos de 100 a 5 \n\nPara o sexo só são aceitos as letras 'M' e 'F' sendo respectivamente Masculino e Feminino")

for (var cont = 1; cont <= 5; cont++) {

    idade = parseInt(prompt("Digite a idade da " + cont + "º pessoa: "))
    sexo = prompt("Digite o sexo da " + cont + "º pessoa: ")

    if ((idade <= 100 && idade >= 5) && (sexo == "M" || sexo == "F")) {
        verificacao = true

        if (sexo == "M") {
            if (idade >= 18) {
                homem_maior++
            } else {
                homem_menor++
            }

            if (idade >= homem_velho) {
                homem_velho = idade
            } if (idade <= homem_novo) {
                homem_novo = idade
            }
        } else {
            if (idade >= 18) {
                mulher_maior++
            } else {
                mulher_menor++
            }

            if (idade >= mulher_velha) {
                mulher_velha = idade
            } if (idade <= mulher_nova) {
                mulher_nova = idade
            }
        }

    } else {
        verificacao = false
        cont = 6
    }
}

if (verificacao == true) {

    //geral
    alert("Tem " + (homem_maior + homem_menor) + " Homens e " + (mulher_maior + mulher_menor) + " Mulheres\n\nTem " + (homem_maior + mulher_maior) + " pessoas maiores de idade e " + (homem_menor + mulher_menor) + " menores")

    //homem
    if ((homem_maior + homem_menor) != 0) {
        alert("O homem mais velho tem " + homem_velho + " anos, enquanto o mais novo tem " + homem_novo + ", Tem " + homem_maior + " homens maiores de idade")
    } else {
        alert("Não há nenhum homem no grupo")
    }

    // mulher
    if ((mulher_maior + mulher_menor) != 0) {
        alert("A mulher mais velha tem " + mulher_velha + " anos, enquanto a mais nova tem " + mulher_nova + ", Tem " + mulher_maior + " mulheres maiores de idade")
    } else {
        alert("Não há nenhuma mulher no grupo")
    }

} else {
    alert("Digitação incorreta")
}