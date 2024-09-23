function jogo() {
    var escolha = document.getElementById("caixa").value;
    var esc = escolha.toString();
    var maquina = Math.random() * 2 + 1;
    var comparacao;
    var resultado = document.getElementById("resultado");
    var escolha1 = document.getElementById("escolha");

    if (esc === "P" || esc === "p")
        comparacao = 1;
    else if (esc === "A" || esc === "a")
        comparacao = 2;
    else if (esc  === "T" || esc === "t")
        comparacao = 3;

    if (Math.round(maquina) === comparacao) {
        resultado.innerHTML = `<p>Empatou!!!</p>`
    } else if (Math.round(maquina) > comparacao && Math.round(maquina) - 1 === comparacao) {
        resultado.innerHTML = `<p>Você perdeu!</p>`
    } else if (Math.round(maquina) < comparacao && Math.round(maquina) - 1 === comparacao) {
        resultado.innerHTML = `<p>Você ganhou!</p>`
    }

    if(Math.round(maquina) === 1){
        escolha1.innerHTML = `<p>Escolha da máquina: Pedra</p>`
    } else if(Math.round(maquina) === 2){
        escolha1.innerHTML = `<p>Escolha da máquina: Papel</p>`
    } else if(Math.round(maquina) === 3){
        escolha1.innerHTML = `<p>Escolha da máquina: Tesoura</p>`
    }
}