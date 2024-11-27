export function sum(array){
    let total = 0;
    for (const elemento of array) {
        total += elemento;
    }
    return total;
}

export function sumOdds(array){
    let total = 0;
    for (const elemento of array) {
        if (elemento % 2 != 0) {
            total += elemento;
        }
    }
    return total;
}


export function product(array){
    let total = 1;
    for (const elemento of array) {
        total *= elemento;
    }
    return total;
    
}

// return array.reduce((total, elemento) => total + elemento, 0);  ***SE EU FOSSE RESOLVER A SOMA COM REDUCE()

//return array.reduce((total, elemento) => {
        //if (elemento % 2 !== 0) { // Verifica se o número é ímpar
            //return total + elemento; // Soma os ímpares                **SE EU FOSSE RESOLVER SumOdds COM REDUCE()
        //}
        //return total; // Caso contrário, mantém o total atual
    //}, 0); // Inicia com 0
//}

//return array.reduce((total, elemento) => total * elemento, 1); // Multiplica todos os elementos      **SE EU FOSSE RESOLVER product COM REDUCE()
