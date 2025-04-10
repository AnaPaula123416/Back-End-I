//Escreva um programa que declare duas variáveis, “nome” e “idade”, e as
//imprima em um console em uma frase que diga “Olá, meu nome é [nome]
//e eu tenho [idade] anos”.

let nome = "Ana Paula";
let idade = 16;

console.log("Olá meu nome é " + nome + " e eu tenho  " + idade); //(concatenação)
console.log(`Olá meu nome é ${nome} e eu tenho ${idade}`); //(Interpolação)

//Declare uma string e utilize métodos para converter para maiúsculas e
//minúsculas.
let string = "Olá"

lower = string.toLowerCase()
console.log(lower)

upper = string.toUpperCase()
console.log(upper)


//Declare uma variável e verifique se o tipo dela é number

let text = (typeof idade)
console.log(text)
let numero = (typeof nome)
console.log(numero)

//Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e
//peso.
let peso = 49;
let altura = 1.60;
let imc = (peso / (altura * altura)).toFixed(2);
console.log(`O seu IMC é: ${imc}`);