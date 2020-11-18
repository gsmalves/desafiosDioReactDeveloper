// Desafio
// Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.



let line = 5;

var contador = 1

if((line > 1 ) && (line<1000) ){
  
  while(contador<=line){
    console.log(contador,Math.pow(contador,2),Math.pow(contador,3));
    contador++;
  }
  
}