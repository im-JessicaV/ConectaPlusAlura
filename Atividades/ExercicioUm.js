//EXERCÍCIO 1 - Múltiplos de 3 e 5
//Imprima todos os números de `1` a `n`. Para múltiplos de 3, imprima `Fizz`; para múltiplos de 5, `Buzz`; para múltiplos de ambos, `FizzBuzz`.
//Exemplo:
//Entrada: 10
//Saída: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz

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


