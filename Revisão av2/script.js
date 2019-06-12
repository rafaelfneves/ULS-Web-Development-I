function enviarQ1(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = document.getElementById('n3').value;
    var q1 = (n1+n2)*n3;
    document.getElementById('Q1').value=q1;
}

function enviarQ2(){
    var ordem1 = document.getElementById('numQ2').value;

    var inverte = new Array;
    for (var i = ordem1.length - 1; i >= 0; i--){
        inverte += ordem1[i];   
    }

    document.getElementById('Q2').value=inverte;
}

function enviarQ4(){

    var n1Q4= document.getElementById('n1Q4').value;
    var n2Q4= document.getElementById('n2Q4').value;

    var divisao = n1Q4/n2Q4
    var resto = n1Q4 % n2Q4;

    document.getElementById('divQ4').value=Math.trunc(divisao);
    document.getElementById('restoQ4').value=Math.trunc(resto);


}