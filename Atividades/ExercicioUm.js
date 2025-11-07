//EXERCÍCIO 1 - Múltiplos de 3 e 5
//Imprima todos os números de `1` a `n`. Para múltiplos de 3, imprima `Fizz`; para múltiplos de 5, `Buzz`; para múltiplos de ambos, `FizzBuzz`.
//Exemplo:
//Entrada: 10
//Saída: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz

/*
let numero = 19;
let resultado = "";
for (let i = 0; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "FizzBuzz ";
        
    } else if (i % 3 === 0) {
        resultado += "Fizz ";
    } else if (i % 5 === 0) {
        resultado += "Buzz ";
    } else {
        resultado += i + " ";
    }
}
console.log(resultado);
*/

// function saudacao(){
//     console.log("Olá, seja bem-vindo(a)!");
// }
// saudacao();

// function novaSaudacao(nome){
//     console.log("Olá, " + nome + "! Seja bem-vindo(a)!");
// }
// novaSaudacao("Jéssica");

// function numeroDobrado(numero){
//     return numero * 2;
// }
// console.log(numeroDobrado(5));

// function mediaAritmetica(num1, num2, num3){
//     return (num1 + num2 + num3) / 3;
// }
// console.log(mediaAritmetica(4, 6, 8));

// function numeroMultiplicado(num){
//     return num * num;
// }
// console.log(numeroMultiplicado(7));

//IMC
// function calcularIMC(peso, altura) {
//     return peso / (altura * altura);
// }
// console.log(calcularIMC(61, 1.65));

// //Fatorial
// function fatorial(numero) {
//     let resultado = 1;
//     for (let i = 2; i <= numero; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }
// console.log(fatorial(5)); // Exemplo de uso da função fatorial

// //cambio
// function converterDolarParaReal(valorEmDolar) {
//     const cotacaoDolar = 4.80;
//     return valorEmDolar * cotacaoDolar;
// }
// console.log(converterDolarParaReal(100)); // Exemplo: 100 dólares = R$ 480,00

// //area e perimetro do retangulo
// function calcularAreaRetangulo(base, altura) {
//     return base * altura;
// }
// console.log(calcularAreaRetangulo(5, 10)); // Exemplo: área = 50

// //area e perimetro do circulo
// function calcularAreaCirculo(raio) {
//     return Math.PI * raio * raio;
// }
// console.log(calcularAreaCirculo(5)); // Exemplo: área = 78.54

// //tabuada
// function tabuada(numero) {
//     let resultado = "";
//     for (let i = 0; i <= 10; i++) {
//         resultado += `${numero} x ${i} = ${numero * i}\n`;
//     }
//     console.log(resultado);
// }
// tabuada(7); // Exemplo: tabuada do 7