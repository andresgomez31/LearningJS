/*Escribe un programa que imprima los números del 1 al 100, peroEscribe un programa que imprima los números del 1 al 100, pero:
Para los múltiplos de 3, imprime Fizz en lugar del número.
Para los múltiplos de 5, imprime Buzz en lugar del número.
Para los múltiplos de 3 y 5, imprime FizzBuzz en lugar del número.
*/

for(i = 0; i <= 100; i++){
    if(i % 3 == 0){
        console.log("Fizz");
    }
    if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
    if(i < 100){
        console.log(", ");
    }
}