var vetor=[4, 8, 7, 6]

//alert(vetor)
//alert(vetor[2])
vetor[1]=3
//alert(vetor)

var soma 
soma=vetor[0]+vetor[3]
//alert("A soma doss elementos da posição 0 e 3 é: "+soma)

lista=["Juquinha", 1910,"Rua A", "Irati", "PR", 80.5]
alert(lista)
alert(lista[3])

for(var i=0; i<lista.lenght; i++) {//lenght método que determina o tamanho maximo de um vetor.
    document.write("<h2>"+lista[i]+"<h2>")
}