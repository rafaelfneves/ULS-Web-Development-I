function limpar(){
    document.getElementById('visor').value='';
}

function preencher(valor){
    document.getElementById('visor').value+=valor;
}

function peso(){
    document.getElementById("visor").value='';
}

function calcular(){
    var resultado=0;
    resultado=document.getElementById('visor').value;
    document.getElementById('visor').value='';
    document.getElementById('visor').value=eval(resultado);
}

function enviar(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('imc').value=imc;
}
