let numeroSecreto = gerarNumeroAleatorio();

function exivirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
};

exivirTextoNaTela('h1', 'Jogo do Numero Secreto');
exivirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}