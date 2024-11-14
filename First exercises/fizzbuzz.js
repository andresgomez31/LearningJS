/*Escribe un programa que imprima los números del 1 al 100, peroEscribe un programa que imprima los números del 1 al 100, pero:
Para los múltiplos de 3, imprime Fizz en lugar del número.
Para los múltiplos de 5, imprime Buzz en lugar del número.
Para los múltiplos de 3 y 5, imprime FizzBuzz en lugar del número.
*/

for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        process.stdout.write("FizzBuzz");
    }
    else if(i % 3 === 0){
        process.stdout.write("Fizz");
    }
    else if(i % 5 === 0){
        process.stdout.write("Buzz");
    }
    else{
        process.stdout.write(i.toString());
    }

    if(i < 100){
        process.stdout.write(", ");
    }
}