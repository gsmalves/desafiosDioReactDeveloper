// Desafio
// A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, fazendo com que vários competidores se dediquem a capturar tartarugas rápidas, e treina-las para faturar milhões em corridas pelo mundo.
// Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil, pois quase todos esses répteis são bem lentos. Cada tartaruga é classificada em um nível dependendo de sua velocidade:


// Nível 1: Se a velocidade é menor que 10 cm/h .
// Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .
// Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

// Sua tarefa é identificar qual o nível de velocidade da tartaruga mais veloz de um grupo.


while(true){
  let qtdTartarugas = parseInt(gets())
  if(isNaN(qtdTartarugas)){
    break;
  }
  let velocidadesTartarugas = gets().split(" ");
  let maisRapida = 0;

  for (let i = 0; i < qtdTartarugas; i++) {
    if (parseInt(velocidadesTartarugas[i]) > maisRapida) {
      maisRapida = parseInt(velocidadesTartarugas[i]);
    }
  }

  if (maisRapida < 10){
    nivel = 1;
  } else if (maisRapida >= 10 && maisRapida < 20){
    nivel = 2;
  } else {
    nivel = 3;
  }

  console.log(nivel);
}