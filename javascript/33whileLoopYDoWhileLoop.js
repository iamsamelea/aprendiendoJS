//WHILE LOOP(si la condición no se cumple no se ejecuta)
let i = 0; //Indice o valor inicial

while( i < 100) { //Condición
    if( i % 2 === 1) {
        console.log(`El número ${i} es IMPAR`);
    } else {
        console.log(`El número ${i} es PAR`);
    }
    i++; //Incremento
}

//DO WHILE LOOP (este loop se ejecuta aunque no se cumpla la condición, es la principal diferencia con el while loop)
let a = 0; //Indice o valor inicial //He puesto una a porque la i está en el ejemplo anterior pero se suele poner la letra i de indice

do { //Aqui se ejecuta el código
    console.log(a);

    a++; //Incremento
}
while( a < 10); //Condición



