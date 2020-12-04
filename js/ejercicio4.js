        function aleatorio() {
                const valorMin = 1;
                const valorMay = 12;
                var mes = Math.floor((Math.random() * (valorMay - valorMin + 1)) + valorMin);
                console.log(mes);
                (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)?
                console.log("El mes tiene 31 dias") : (mes == 4 || mes == 6 || mes == 9 || mes == 11)?
                console.log(" el mes tiene 30 dias") : console.log("Tiene 29 días");
        
        }