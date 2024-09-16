var nome = window.prompt("Nome do aluno: ");
var n1 = window.prompt("Digite a primeira nota: ");
var n2 = window.prompt("Digite a segunda nota: ");
var n3 = window.prompt("Digite a terceira nota: ");
var n4 = window.prompt("Digite a quarta nota: ");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
var media = n1 + n2 + n3 + n4


alert(`Aluno: ${nome} Media Final: ${parseFloat(media/4)}`);