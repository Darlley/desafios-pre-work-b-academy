export const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

///const jane = john - usam a mesma referência de memória

/*
 * Vi na palestra #37 Fronend SP Meetup
 * manipulação de arrays: .map(), .filter() e .reduce()
 * manipulação de objetos: Object.keys(), Object.values() e Object.entries()
 * Spread Operator
 * A utilização destes métodos substitu estruturas de repetição
 * Spread Operator ... espalha valores de arrays e objetos
 */
export const jane = {
  ...john,
  name: 'Jane',
//hobbies: john.hobbies.concat('MuayThai', 'Programming')
  // 4:00:1 da live:
  hobbies: [
    ...john.hobbies,
    'MuayThai', 'Programming'
  ]
}

/*
 * ERRADO jane.hobbies = jane.hobbies.concat('MuayThai', 'Programming')
 * Revendo a live ele disse que se estiver usando atribuição ja indica mutabilidade
 *
 * console.log('John:', john.hobbies)
 * console.log('Jane:', jane.hobbies)
 */

console.log('John:', john.hobbies)
console.log('Jane:', jane.hobbies)
