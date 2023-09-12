function tabuada(){
    var num = parseInt (document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var tabuada; 

    for(var count = 1; count <= 10; count ++)//++ representa +1
    tabuada += num + "X" + count + "=" + num*count + "<br />";
    resposta.innerHTML = tabuada;



}