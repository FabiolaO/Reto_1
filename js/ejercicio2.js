function calcular() {    
    var a = parseInt(document.getElementById("Cam1").value);
    var b = parseInt(document.getElementById("Cam2").value);    
    document.getElementById("resultado1").innerHTML = a-b;    
    document.getElementById("resultado2").innerHTML = a*b;
}