//Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.
let = num1 = 55
let = num2 = 23

let soma = num1 + num2; 
console.log(`Soma: `+ soma)

let subtração = num1 - num2;
console.log(`Subtração: `+ subtração)

let multiplicação = num1 * num2;
console.log(`Miltiplicação: ` + multiplicação)

let divisão = (num1 / num2).toFixed(2);
console.log(`Divisão: ` + divisão)

//Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let idade1 = 15
let idade2 = 17
let resultado = idade1 == idade2
console.log(resultado);


//Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.

let idade = 7
let verificação = idade <= 18 ? `Maior de idade` : `Menor de idade`
console.log(verificação);

//Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.

let num = 33
let verificar = num = num & 2 == 0 ? `É par` : `É impar`
console.log(verificar);