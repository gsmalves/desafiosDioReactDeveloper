let e = gets() // Quantidade de números
let x = gets()
let elementos = x.replace(/\s/g,',').trim().split(',');
let min = elementos[0]
let posicao = 0
for (let i = 0; i < e; i++){
  if(parseFloat(min) > parseFloat(elementos[i])){
    min = elementos[i]
    posicao = i
  }
}
console.log('Menor valor: ' + min)
console.log('Posicao: ' + posicao)