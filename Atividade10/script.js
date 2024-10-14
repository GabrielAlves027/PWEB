function calcIMC(){
    var x, y;
    x = document.getElementById("peso").value;
    y = document.getElementById("altura").value;

    var resultado, res;
    res = document.getElementById("resposta");

    resultado = x/(y * y);

    if(resultado < 18.5){
        res.innerHTML = `<p>Magreza</p>`;
    } else if(resultado >= 18.5 && resultado < 24.9){
        res.innerHTML = `<p>Normal</p>`;
    } else if(resultado >= 24.9 && resultado < 29.9){
        res.innerHTML = `<p>Sobrepeso</p>`;
    } else if(resultado >= 29.9 && resultado < 34.9){
        res.innerHTML = `<p>Obesidade</p>`;
    } else if(resultado >= 34.9 && resultado){
        res.innerHTML = `<p>Obesidade grave</p>`;
    }
}