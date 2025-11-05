let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        reiniciarJogo();
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);

        } else {
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
        }

        tentativas++;
        limparCampo();

    }
}

function reiniciarJogo(){
    let botaoReiniciar = document.getElementById("reiniciar");
    botaoReiniciar.disabled = false;
    limparCampo();
    botaoReiniciar.onclick = function(){
        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
        exibirTextoNaTela("h1", "Adivinhe o número");
        exibirTextoNaTela("p", "Tente adivinhar o número entre 1 e 10 que estou pensando!");
        botaoReiniciar.disabled = true;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

exibirTextoNaTela("h1", "Adivinhe o número");
exibirTextoNaTela("p", "Tente adivinhar o número entre 1 e 10 que estou pensando!");