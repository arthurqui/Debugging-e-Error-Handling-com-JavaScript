/*

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
    a)Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    b)Se o array não for do tipo 'object', lance um erro do tipo TypeError
    c)Se o número não for do tipo 'number', lance um erro do tipo TypeError
    d)Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/



function validaArray(arr,num){

    try {
    //a)
    if(!arr && !num) throw ReferenceError("Envie os parâmetros");

    //b)
    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    //c)
    if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo number");

    //d)
    if (arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este é um ReferenceError!");
            console.log(error.message);
        } else if (error instanceof TypeError) {
                console.log("Este é um TypeError");
                console.log(error.message);
            } else if (error instanceof RangeError) {
                    console.log("Este é um RangeError!");
                    console.log(error.message);
            } else { 
                    console.log(error);
                   }
    }
   
}

//console.log(validaArray());

/*
Este é um ReferenceError!
Envie os parâmetros
undefined
*/

//console.log(validaArray(5,5));

/*
Este é um TypeError
Array precisa ser do tipo object
undefined
*/

//console.log(validaArray([],'a'));

/*
Este é um TypeError
num precisa ser do tipo number
undefined
*/

//console.log(validaArray([],5));

/*
Este é um RangeError!
Tamanho inválido
undefined
*/

console.log(validaArray([1,2,3,4,5],5));

/*
[ 1, 2, 3, 4, 5 ]
*/