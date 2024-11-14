//Contador de vocales

function contarVocales(s){
    contador = 0;
    for(letter of s){
        if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u'){
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("hola mundo"));