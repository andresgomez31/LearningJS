//Imprimir numeros del 1 al 10
let i;

for(i = 1; i <= 10; i++){
    if(i < 10){
        process.stdout.write(i + ", ");
    }
    else{
        console.log(i);
    }
}