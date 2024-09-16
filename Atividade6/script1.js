var n1 = window.prompt("Digite o primeiro número: ");
var n2 = window.prompt("Digite o segundo número: ");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

soma = n1 + n2;
subtracao = n1 - n2;
produto = n1 * n2;
divisao = n1 / n2;
resto = n1 % n2;

alert(`Soma: ${soma}\n Subtração: ${subtracao}\n Produto: ${produto}\n Divisão: ${divisao}\n Resto: ${resto}`);