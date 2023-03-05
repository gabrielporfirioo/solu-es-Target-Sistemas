numero= []
numero[0]= 0;
numero[1]= 1;
for (var i=2; i<10 ;i++){
    numero[i] = numero[i-2] + numero[i-1];
    }
    console.log(numero);
