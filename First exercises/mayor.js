//Mayor de 3 numeros

function mayorDeTres(a, b, c){
    mayor = a;
    if(mayor < b){
        mayor = b;
    }
    if(mayor < c){
        mayor = c;
    }
    return mayor;
}

console.log(mayorDeTres(3, 7, 5));