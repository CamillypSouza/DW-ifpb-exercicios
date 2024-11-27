//nome: camilly pinto de souza

//EXERCICIO 1- função para calcular a soma:

function soma(a, b) {
    return a + b;
}

//EXERCICIO 2- função para calcular a soma:
function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            // Verifica se o denominador não é zero
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: Divisão por zero não é possivel.";
            }
        default:
            return "Erro: Operador inválido.";
    }
}


//EXERCICIO 3- função para calcular a soma:
function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return "none"; 
    }

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        return "none";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "equilatero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "isosceles";
    } else {
        return "escaleno";
    }
}




// Exemplo de uso DAS 3 FUNÇÕES:
const resultado_soma = soma(1, 2);
console.log(`A soma de 1 e 2 é: ${resultado_soma}`);

const num1 = 1;
const num2 = 1;
const operador = '+';

const resultado = calculadora(num1, num2, operador);
console.log(`O resultado de ${num1} ${operador} ${num2} é: ${resultado}`);

onsole.log(verificarTriangulo(10, 10, 10)); // equilatero
console.log(verificarTriangulo(3, 4, 4)); // isosceles
console.log(verificarTriangulo(3, 4, 5)); // escaleno