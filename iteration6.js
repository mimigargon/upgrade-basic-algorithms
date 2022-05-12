//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
let i = 0
for (i; i < 10; i++){
    console.log(i);
}
//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
let a = 0
for (a; a < 9; a++){
    if (a%2 === 0){
        console.log(a);
    }
}

//1.3 Crea un bucle para conseguir dormir contando ovejas.  Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.
let b = 0;
for(b; b < 11; b ++){
    if(b < 10){
        console.log("Intentado dormir");
    }
    else {
        console.log("Dormida!");
    }
    
}