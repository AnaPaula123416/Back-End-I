import readLine from 'readline-sync';

//1. Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.
// let = dia1 = domingo 
// let = dia2 = segundaFeira 
// let = dia3 = tercaFeira 
// let = dia4 = quartaFeira 
// let = dia5 = quintaFeira 
// let = dia6 = sextaFeira 
// let = dia7 = sabado 
//1
//let dia = Number(readLine.question("Informe o dia da semana: "));
let dia = readLine.questionInt("Informe o dia da semana: ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Valorinválido! \nInforme o valor no intervalo de 1 a 7.");
}

//2. Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
//do mês.

let mes = readLine.questionInt("Informe o número do mês: ");

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;

    default:
        console.log("Valorinválido! \nInforme o valor no intervalo de 1 a 12.");
}


//3. Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da
//operação.

let x = readLine.questionFloat("Informe o primeiro valor: ")
let y = readLine.questionFloat("Informe o segundo valor: ")
let op = readLine.questionFloat("Escolha a opção: \n[1] Soma\n[2] Subtração \n[3] Multiplicação \n[4] Divisão  ")

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
}


// 4. Um funcionário irá receber um aumento de acordo com o seu
// categoria de bonificação (A,B,C e D).
// A tabela abaixo mostra o percentual de aumento de cada
// categoria:
// Faça um programa que leia a categoria de bonificação e o
// salário atual de um funcionário, em seguida calcule e
// imprima o seu novo salário. Use a instrução switch.

let salario = readLine.questionFloat("Inform seu salário: ");
let cat = readLine.question("Informe a categoria da bonificação").toUpperCase();
let bonus = 0

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo Salário ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo Salário${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo Salário${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo Salário${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    default:
        console.log9("Categoria inálida!");
        break
}