function calcular1() {
    var quantidade = parseFloat(document.getElementById("n1").value)

    document.getElementById("resultado").innerHTML = `A conversão desta quantidade de real para dólar fica: ${quantidade / 5.43}`
}

function calcular2() {
    var quantidade = parseFloat(document.getElementById("n1").value)

    document.getElementById("resultado").innerHTML = `A conversão desta quantidade de dólar para real fica: ${quantidade * 5.43}`
}