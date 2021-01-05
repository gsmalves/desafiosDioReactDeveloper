let n = parseInt(gets()); //3 <= n <= 100 numero de alunos

let arrMatri = Array(n);  //matriculas
let arrNotas = Array(n);//notas

for (i = 0; i < n; i++) {
    let line = gets().split(' ');
    arrMatri[i] = parseInt(line[0]);
    arrNotas[i] = parseFloat(line[1]);
}

let maior = 0;
var maxi = arrNotas.reduce(function (a, b) {
    return Math.max(a, b);
});
for (i = 0; i < n; i++) {
    if (maxi < 8) {
        console.log('Minimum note not reached');
        break;
    } else {
        if (arrNotas[i] === maxi) {
            console.log(arrMatri[i]);
        }
    }
}
