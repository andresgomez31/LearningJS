//Factorial de un numero

function factorial(n){
    factor = 1;
    for(n; n > 1; n--){
        factor *= n
    }
    return factor
}

console.log(factorial(5));