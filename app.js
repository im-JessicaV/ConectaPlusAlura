// let listaNumerosSorteados = [];
// let limiteDeTentativas = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;


// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
//     responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
// }

// function verificarChute() {
//     let chute = document.querySelector("input").value;

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela("h1", "Parabéns!");
//         let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
//         let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
//         exibirTextoNaTela("p", mensagemTentativas);
//         reiniciarJogo();
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);

//         } else {
//             exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
//         }

//         tentativas++;
//         limparCampo();

//     }
// }

// function reiniciarJogo() {
//     let botaoReiniciar = document.getElementById("reiniciar");
//     botaoReiniciar.disabled = false;
//     limparCampo();
//     botaoReiniciar.onclick = function() {
//         numeroSecreto = gerarNumeroAleatorio();
//         tentativas = 1;
//         exibirTextoNaTela("h1", "Adivinhe o número");
//         exibirTextoNaTela("p", "Tente adivinhar o número entre 1 e 10 que estou pensando!");
//         botaoReiniciar.disabled = true;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector("input");
//     chute.value = "";
// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * limiteDeTentativas + 1);
//     let quantidadeNumerosSorteados = listaNumerosSorteados.length;
//     if (quantidadeNumerosSorteados == limiteDeTentativas) {
//         listaNumerosSorteados = [];
//     }
//     if (listaNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaNumerosSorteados.push(numeroEscolhido);
//         return numeroEscolhido;
//     }
// }

// exibirTextoNaTela("h1", "Adivinhe o número");

//jogo da forca
let palavras = ["javascript", "programacao", "desenvolvedor", "computador", "tecnologia"];
let palavraSecreta = "";
let letrasTentadas = [];
let letrasCorretas = [];
let tentativasRestantes = 6;
let jogoAtivo = true;

function escolherPalavraSecreta() {
    let indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[indiceAleatorio];
}
function exibirEstadoAtual() {
    let palavraExibida = palavraSecreta.split('').map(letra => (letrasCorretas.includes(letra) ? letra : '_')).join(' ');
    document.getElementById("palavra").innerText = palavraExibida;
    document.getElementById("tentativas").innerText = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("letras").innerText = `Letras tentadas: ${letrasTentadas.join(', ')}`;
}
function verificarLetra(letra) {
    if (!jogoAtivo || letrasTentadas.includes(letra)) return;

    letrasTentadas.push(letra); 
    if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra); 
        if (palavraSecreta.split('').every(l => letrasCorretas.includes(l))) {
            jogoAtivo = false;
            alert("Parabéns! Você ganhou!");
        }
    } else {
        tentativasRestantes--;
        if (tentativasRestantes === 0) {
            jogoAtivo = false;
            alert("Fim de jogo! Você perdeu!");
        }
    }
    exibirEstadoAtual();
}
function reiniciarJogo() {
    palavraSecreta = "";
    letrasTentadas = [];
    letrasCorretas = [];
    tentativasRestantes = 6;
    jogoAtivo = true;
    escolherPalavraSecreta();
    exibirEstadoAtual();
}
document.getElementById("letraForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let letraInput = document.getElementById("letraInput");
    let letra = letraInput.value.toLowerCase();
    verificarLetra(letra);
    letraInput.value = "";
});
reiniciarJogo();

