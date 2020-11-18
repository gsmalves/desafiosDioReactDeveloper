// Desafio
// Como um bom desenvolvedor, você precisa fazer um programa que leia dois ingeiros: 
// R e V (devem ser lidos tantos valores para V quantos necessários, até que seja digitado um valor maior do que R
// para ele). Conte quantos números inteiros devem ser somados em sequência (considerando o R nesta soma) para que a soma ultrapasse a V o mínimo possível.
// Escreva o valor final da contagem. A entrada pode conter, por exemplo, os valores 21 21 15 30. Neste caso, é então assumido o valor 21 para R enquanto 
// os valores 21 e 15 devem ser desconsiderados pois são menores ou iguais a R. Como o valor 30 está dentro da especificação (maior do que R) ele será válido e 
// então deve-se processar os cálculos para apresentar na saída o valor 2, pois é a quantidade de valores somados para se produzir um valor maior do que 30 (21 + 22).


let R = parseInt(gets());
let V = 0;


while(V <= R){
  V = parseInt(gets());
}
let soma = 0;
let count = 0;
while(soma <= V){
    soma += R;
    R++;
    count++;
}
console.log(count);