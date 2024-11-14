//Palindromo

function esPalindromo(s){
    index = s.length - 1;
    i = 0;


    for(letter of s){
        if(s[i] !== s[index]){
            return false;
        }
        i++;
        index--;
    }
    return true;
}

console.log(esPalindromo("hola"));
console.log(esPalindromo("radar"));