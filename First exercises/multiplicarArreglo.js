//Multiplicacion de numeros de un arreglo

function multiplicarArreglo(arr){
    result = 1;
    for(n in arr){
        result *= n;
    }
    return result;
}

console.log(multiplicarArreglo([2, 3, 4]));