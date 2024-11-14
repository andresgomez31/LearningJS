//Reverso de una cadena

function reverso(s){
    let index = s.length - 1;
    let i = 0;
    let reversed = [];

    for(letter of s){
        reversed.push(s[index]);
        index--;
    }
    return reversed;
}

console.log(reverso("hola"));