//Palindromo

function esPalindromo(s){
    index = length(s)
    i = 0;
    reversed[index];

    for(letter of s){
        if(index > i){
            reversed[index--] = s[i++];
            if(reversed[index] != s[i]){
                return false;
            }
        }
    return true;
    }
}