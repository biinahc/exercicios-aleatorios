
// 1 - Ordenação de Vetor
function ordenarVetor() {
    let vetor = [12, -5, 3, -9, 8, 0, -2, 7];

    console.log("a) Vetor digitado:", vetor);
    console.log("b) Vetor em ordem crescente:", [...vetor].sort((a, b) => a - b));
    console.log("c) Vetor em ordem decrescente:", [...vetor].sort((a, b) => b - a));
}

ordenarVetor();

// 2 - Jogo da Mega Sena (Sorteio de Números)
function megaSena() {
    let numeros = [];

    while (numeros.length < 6) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    console.log("Números sorteados da Mega Sena em ordem crescente:", numeros.sort((a, b) => a - b));
}

megaSena();

// 3 - Ordenação de 20 números aleatórios
function ordenarNumerosAleatorios() {
    let numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1001));

    console.log("Números gerados:", numeros);
    console.log("Números ordenados em ordem crescente:", numeros.sort((a, b) => a - b));
}

ordenarNumerosAleatorios();