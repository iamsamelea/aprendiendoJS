//For Loop
for(let i = 1; i < 102; i++) { // Indice,Condición e Incremento 
    if( i % 2 === 0) {
        console.log(`El número ${i} és PAR`)
    } else {
        console.log(`El número ${i} és IMPAR`)
    }
};


//While Loop (utilizo la letra a en lugar de la i)
let a = 1; // Indice

while( a < 11 ) {
    console.log(a)
    a++;
};

//Do While Loop
let b = 1; //Indice

do {
    console.log(b)
    b++;
} while( b < 11);