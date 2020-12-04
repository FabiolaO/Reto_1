var numero =8;
console.log(numero);

var num= 5;
console.log(num);


       

    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;    
         }   
         console.log(aleatorio(0,10));
     
    rest = 8-5;
    mult = 8*5;
    

    if (aleatorio(0,10)<5) {
        document.write("La resta de los numeros es:",rest);   
        console.log(rest);     
    }else {
        document.write("La multiplicacion de los numeros es:",mult);
        console.log(mult);
    }
   



    







