function calculadora (func) {
  // console.log(func) esta recendo como parâmetro uma função (a, b) => a + b
  return (a, b) => { // pego os valores a e b que estão enclausurados
    return func(a, b); // retorno a execução da função inicial (callback)
  }
}

const sum = calculadora((a, b) => a + b)
const sub = calculadora((a, b) => a - b)
const mult = calculadora((a, b) => a * b)
const div = calculadora((a, b) => a / b)

console.log('Somar 1 e 2 = 3:', sum(1, 2) === 3)
console.log('Subtrair 4 de 20 = 16:', sub(20, 4) === 16)
console.log('Multiplicar 3 com 3 = 9:', mult(3, 3) === 9)
console.log('Dividir 15 por 5 = 3:', div(15, 5) === 3)

/*
 * exemplo sem as constantes
 * console.log( `Somar 1 e 2 = 3: `, calculadora((a,b) => a+b)(1,2) == 3)
 *
 * calculadora( function (a, b) {
 *   return a+b;
 * })(2, 1) == 3
 */

export {sum, sub, mult, div}
