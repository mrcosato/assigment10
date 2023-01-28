/*var readline = require('readline-sync');
var Inteiros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var insereordenado = 0;


console.log("programa que leia 20 números inteiros, depois os exiba em ordem crescente");
Inteiros= parseInt(readline.question("O primeiro inteiro é: "));
Inteiros= parseInt(readline.question("O segundo inteiro é: "));
Inteiros= parseInt(readline.question("O terceiro inteiro é: "));
Inteiros= parseInt(readline.question("O quarto inteiro é: "));
Inteiros= parseInt(readline.question("O quinto inteiro é: "));
Inteiros= parseInt(readline.question("O sexto inteiro é: "));
Inteiros= parseInt(readline.question("O setimo inteiro é: "));
Inteiros= parseInt(readline.question("O oitavo inteiro é: "));
Inteiros= parseInt(readline.question("O nono inteiro é: "));
Inteiros= parseInt(readline.question("O decimo inteiro é: "));
Inteiros= parseInt(readline.question("O 11 inteiro é: "));
Inteiros= parseInt(readline.question("O 12 inteiro é: "));
Inteiros= parseInt(readline.question("O 13 inteiro é: "));
Inteiros= parseInt(readline.question("O 14 inteiro é: "));
Inteiros= parseInt(readline.question("O 15 inteiro é: "));
Inteiros= parseInt(readline.question("O 16 inteiro é: "));
Inteiros= parseInt(readline.question("O 17 inteiro é: "));
Inteiros= parseInt(readline.question("O 18 inteiro é: "));
Inteiros= parseInt(readline.question("O 19 inteiro é: "));
Inteiros= parseInt(readline.question("O 20 inteiro é: "));

readline.insereordenado = function(inteiros, vainsereordenadol){
    Inteiros.push(insereordenado);
    Inteiros = Inteiros.sort(function(a, b) {
        return a - b;
    })

    console.log(inteiros)
    console.log("a ordem crescente dos numeros sáo: "+ insereordenado);
}
*/
var readlineSync = require("readline-sync");
var valor = 0;
var numeros = [];
// condição
function sortfunction(a, b){
    return (a - b)
}
//repetição
for(i=0; i < 4; i++){
    valor = parseInt(readlineSync.question("Digite um Numero: "));
    numeros.push(valor);
}
numeros.sort(sortfunction);
console.log(numeros);
//operadores de comparação

do{/*código*/}while(valor1 == valor2);
 
do{/*código*/}while(valor1 < valor2);
 
do{/*código*/}while(valor1 <= 5);
 
do{/*código*/}while(valor1 > valor2);
 
do{/*código*/}while(valor1 >= 5);
 
do{/*código*/}while(valor1 != 0);
 
//operadores lógicos
do{/*código*/}while(condicao1 && condicao1 && condicaoN...);
 
do{/*código*/}while(condicao1 || condicao1 || condicaoN...);
