let numVinho = gets();
let competidores= gets().split(' ');
let respostasCertas = 0;

let respostasCertasArray = competidores.filter(respostasCertas => respostasCertas.includes(numVinho));
respostasCertas = respostasCertasArray.length;

console.log(respostasCertas);

